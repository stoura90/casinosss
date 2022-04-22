import * as ActionTypes from '../constants/auth.constants'

const initialState = {
  isAuthenticated: false,
  inviter: null,
  loadings: {
    signIn: false,
    inviter: false,
  },
  errors: {
    signIn: null,
    inviter: null,
  },
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, signIn: true },
        errors: { ...state.errors, signIn: null },
      }
    }
    case ActionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loadings: { ...state.loadings, signIn: false },
        errors: { ...state.errors, signIn: null },
      }
    }
    case ActionTypes.SIGN_IN_ERROR: {
      return {
        ...state,
        isAuthenticated: false,
        loadings: { ...state.loadings, signIn: false },
        errors: { ...state.errors, signIn: payload },
      }
    }

    case ActionTypes.INVITER_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, inviter: true },
        errors: { ...state.errors, inviter: null },
      }
    }
    case ActionTypes.INVITER_SUCCESS: {
      return {
        ...state,
        inviter: payload,
        loadings: { ...state.loadings, inviter: false },
        errors: { ...state.errors, inviter: null },
      }
    }
    case ActionTypes.INVITER_ERROR: {
      return {
        ...state,
        inviter: null,
        loadings: { ...state.loadings, inviter: false },
        errors: { ...state.errors, inviter: payload },
      }
    }

    case ActionTypes.CLEAR_INVITER: {
      return { ...state, inviter: null }
    }

    case ActionTypes.SIGN_OUT_REQUEST:
    case ActionTypes.SIGN_OUT_SUCCESS:
    case ActionTypes.SIGN_OUT_ERROR: {
      return initialState
    }

    default:
      return state
  }
}

export default authReducer
