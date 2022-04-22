import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import * as ActionTypes from '../constants/stars.constants'
import * as actions from '../actions/stars.actions'
import * as api from '../api/stars.api'

export function* matrixQueue({ payload }) {
  const { stars } = yield select()

  try {
    const response = yield call(api.matrixQueue, {
      matrixType: payload.matrixType,
      ...stars.queue.query,
    })
    if (response) {
      yield put(actions.matrixQueueSuccess(response))
    }
  } catch (error) {
    yield put(actions.matrixQueueError(error))

    toast.error(error.message)
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.MATRIX_QUEUE_REQUEST, matrixQueue),
    takeEvery(ActionTypes.SET_MATRIX_QUEUE_PAGE, matrixQueue),
    takeEvery(ActionTypes.SET_MATRIX_QUEUE_LINE, matrixQueue),
    takeEvery(ActionTypes.SET_MATRIX_QUEUE_SEARCH, matrixQueue),
  ])
}
