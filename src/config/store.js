import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { getAccessToken } from '../utils'

import rootSaga from '../sagas'
import rootReducer from '../store/rootReducer'

const persistedState = {
  auth: {
    isAuthenticated: Boolean(getAccessToken()),
    inviter: null,
    loadings: {
      signIn: false,
      inviter: false,
    },
    errors: {
      signIn: null,
      inviter: null,
    },
  },
}

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, routerMiddleware(history)]
if (process.env.NODE_ENV === 'development') {
  middleware.push(
    createLogger({
      predicate: (getState, action) => ![].includes(action.type),
      collapsed: true,
    }),
  )
}

const enhancers = [applyMiddleware(...middleware)]

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
    : compose

export default function configureStore() {
  const store = createStore(rootReducer(history), persistedState, composeEnhancers(...enhancers))

  sagaMiddleware.run(rootSaga)
  return store
}
