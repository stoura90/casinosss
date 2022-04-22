import { takeEvery, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import * as ActionTypes from '../constants/finance.constants'
import * as actions from '../actions/finance.actions'
import * as AppActions from '../actions/app.actions'
import * as api from '../api/finance.api'

export function* transferMoney({ payload }) {
  try {
    const response = yield call(api.transferMoneyToUser, payload)
    if (response) {
      yield put(actions.transferMoneySuccess())
      yield put(AppActions.userInfo())
      toast.success('Ваша заявка принята, ожидайте зачисление')
    }
  } catch (error) {
    yield put(actions.transferMoneyError(error))
    toast.error(error.message)
  }
}

export default function* mainSaga() {
  yield all([takeEvery(ActionTypes.TRANSFER_MONEY_REQUEST, transferMoney)])
}
