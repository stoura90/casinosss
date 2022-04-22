import React from 'react'
import ReactDOM from 'react-dom'
import { YMInitializer } from 'react-yandex-metrika'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

// Update DateJS
import isBetween from 'dayjs/plugin/isBetween'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'

import App from './App'
import configureStore, { history } from './config/store'
import reportWebVitals from './reportWebVitals'
import 'react-toastify/dist/ReactToastify.css'
import 'react-image-lightbox/style.css'
import './config/i18n'
import './scss/styles.css'
//import './pages/private/exchange/index.scss';
var path = require('path')
require('es6-promise').polyfill()
var root_dir = path.resolve(__dirname, '..')
export const store = configureStore()
dayjs.extend(isBetween)
dayjs.extend(timezone)
dayjs.extend(utc)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App history={history} />
      <ToastContainer />
      {process.env.REACT_APP_ENV === 'production' && (
        <YMInitializer
          accounts={[83436040]}
          options={{
            accurateTrackBounce: true,
            trackLinks: true,
            clickmap: true,
            webvisor: true,
          }}
          version="2"
        />
      )}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
