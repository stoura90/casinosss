import * as ActionTypes from '../constants/finance.constants'

/* Transfer Money */
export const transferMoney = (values) => ({
  type: ActionTypes.TRANSFER_MONEY_REQUEST,
  payload: values,
})
export const transferMoneySuccess = (userInfo) => ({
  type: ActionTypes.TRANSFER_MONEY_SUCCESS,
  payload: userInfo,
})
export const transferMoneyError = (error) => ({
  type: ActionTypes.TRANSFER_MONEY_ERROR,
  payload: error,
})

export const toggleTransferMoneyModal = (visible) => ({
  type: ActionTypes.TOGGLE_TRANSFER_MONEY_MODAL,
  payload: visible,
})
