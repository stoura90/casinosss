import * as ActionTypes from '../constants/finance.constants'

const initialState = {
  modals: {
    transfer: false,
  },
  loadings: {
    transfer: false,
  },
  errors: {
    transfer: null,
  },
}

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TRANSFER_MONEY_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, transfer: true },
        errors: { ...state.errors, transfer: null },
      }
    }
    case ActionTypes.TRANSFER_MONEY_SUCCESS: {
      return {
        ...state,
        modals: { ...state.modals, transfer: false },
        loadings: { ...state.loadings, transfer: false },
        errors: { ...state.errors, transfer: null },
      }
    }
    case ActionTypes.TRANSFER_MONEY_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, transfer: false },
        errors: { ...state.errors, transfer: action.payload },
      }
    }

    case ActionTypes.TOGGLE_TRANSFER_MONEY_MODAL: {
      const newState = action.payload ? action.payload : !state.modals.transfer
      return { ...state, modals: { ...state.modals, transfer: newState } }
    }

    default:
      return state
  }
}

export default financeReducer
