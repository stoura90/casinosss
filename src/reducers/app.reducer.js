import * as AuthActionTypes from '../constants/auth.constants'
import * as ActionTypes from '../constants/app.constants'

const initialState = {
  user: null,
  modals: {
    welcome: false,
  },
  loadings: {
    user: false,
    changeUserInfo: false,
    changePassword: false,
    changeFinancePassword: false,
    changeDescription: false,
    changeSocial: false,
    autoRefill: false,
    publish: false,
  },
  errors: {
    user: null,
    changeUserInfo: null,
    changePassword: null,
    changeFinancePassword: null,
    changeDescription: null,
    changeSocial: null,
    autoRefill: null,
    publish: null,
  },
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, user: true },
        errors: { ...state.errors, user: null },
      }
    }
    case ActionTypes.USER_INFO_SUCCESS: {
      const user = action.payload
      const welcomeOpen = user.firstEnter
      return {
        ...state,
        modals: { ...state.modals, welcome: welcomeOpen },
        loadings: { ...state.loadings, user: false },
        errors: { ...state.errors, user: null },
        user,
      }
    }
    case ActionTypes.USER_INFO_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, user: false },
        errors: { ...state.errors, user: action.payload },
      }
    }

    case ActionTypes.CHANGE_USER_INFO_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, changeUserInfo: true },
        errors: { ...state.errors, changeUserInfo: null },
      }
    }
    case ActionTypes.CHANGE_USER_INFO_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loadings: { ...state.loadings, changeUserInfo: false },
        errors: { ...state.errors, changeUserInfo: null },
      }
    }
    case ActionTypes.CHANGE_USER_INFO_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, changeUserInfo: false },
        errors: { ...state.errors, changeUserInfo: action.payload },
      }
    }

    case ActionTypes.CHANGE_PASSWORD_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, changePassword: true },
        errors: { ...state.errors, changePassword: null },
      }
    }
    case ActionTypes.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, changePassword: false },
        errors: { ...state.errors, changePassword: null },
      }
    }
    case ActionTypes.CHANGE_PASSWORD_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, changePassword: false },
        errors: { ...state.errors, changePassword: action.payload },
      }
    }

    case ActionTypes.CHANGE_FINANCE_PASSWORD_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, changeFinancePassword: true },
        errors: { ...state.errors, changeFinancePassword: null },
      }
    }
    case ActionTypes.CHANGE_FINANCE_PASSWORD_SUCCESS: {
      return {
        ...state,
        user: { ...state.user, hasFinPassword: true },
        loadings: { ...state.loadings, changeFinancePassword: false },
        errors: { ...state.errors, changeFinancePassword: null },
      }
    }
    case ActionTypes.CHANGE_FINANCE_PASSWORD_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, changeFinancePassword: false },
        errors: { ...state.errors, changeFinancePassword: action.payload },
      }
    }

    case ActionTypes.CHANGE_SOCIAL_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, changeSocial: true },
        errors: { ...state.errors, changeSocial: null },
      }
    }
    case ActionTypes.CHANGE_SOCIAL_SUCCESS: {
      const user = action.payload
      return {
        ...state,
        loadings: { ...state.loadings, changeSocial: false },
        errors: { ...state.errors, changeSocial: null },
        user,
      }
    }
    case ActionTypes.CHANGE_SOCIAL_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, changeSocial: false },
        errors: { ...state.errors, changeSocial: action.payload },
      }
    }

    case ActionTypes.CHANGE_DESCRIPTION_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, changeDescription: true },
        errors: { ...state.errors, changeDescription: null },
      }
    }
    case ActionTypes.CHANGE_DESCRIPTION_SUCCESS: {
      const user = action.payload
      return {
        ...state,
        loadings: { ...state.loadings, changeDescription: false },
        errors: { ...state.errors, changeDescription: null },
        user,
      }
    }
    case ActionTypes.CHANGE_DESCRIPTION_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, changeDescription: false },
        errors: { ...state.errors, changeDescription: action.payload },
      }
    }

    case ActionTypes.TOGGLE_WELCOME_MODAL: {
      const newState = action.payload ? action.payload : !state.modals.welcome
      return { ...state, modals: { ...state.modals, welcome: newState } }
    }

    case ActionTypes.PUBLISH_SUMMARY_TO_TELEGRAM_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, publish: true },
        errors: { ...state.errors, publish: null },
      }
    }
    case ActionTypes.PUBLISH_SUMMARY_TO_TELEGRAM_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, publish: false },
        errors: { ...state.errors, publish: null },
      }
    }
    case ActionTypes.PUBLISH_SUMMARY_TO_TELEGRAM_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, publish: false },
        errors: { ...state.errors, publish: action.payload },
      }
    }

    case ActionTypes.CHANGE_AUTO_REFILL_PLANET_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, autoRefill: true },
        errors: { ...state.errors, autoRefill: null },
      }
    }
    case ActionTypes.CHANGE_AUTO_REFILL_PLANET_SUCCESS: {
      return {
        ...state,
        user: { ...state.user, autoRefill: action.payload },
        loadings: { ...state.loadings, autoRefill: false },
        errors: { ...state.errors, autoRefill: null },
      }
    }
    case ActionTypes.CHANGE_AUTO_REFILL_PLANET_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, autoRefill: false },
        errors: { ...state.errors, autoRefill: action.payload },
      }
    }

    case AuthActionTypes.SIGN_OUT_REQUEST:
    case AuthActionTypes.SIGN_OUT_SUCCESS:
    case AuthActionTypes.SIGN_OUT_ERROR: {
      return initialState
    }

    default:
      return state
  }
}

export default appReducer
