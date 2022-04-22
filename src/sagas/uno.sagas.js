import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import * as ActionTypes from '../constants/stars.constants'
import * as actions from '../actions/stars.actions'
import * as api from '../api/stars.api'

export function* matrixUnoQueue({ payload }) {
  const { stars } = yield select()

  try {
    const response = yield call(api.matrixUnoQueue, {
      matrixType: payload.matrixType,
      ...stars.queue.query,
    })
    if (response) {
      yield put(actions.matrixUnoQueueSuccess(response))
    }
  } catch (error) {
    yield put(actions.matrixUnoQueueError(error))

    toast.error(error.message)
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.MATRIX_QUEUE_REQUEST, matrixUnoQueue),
    takeEvery(ActionTypes.SET_MATRIX_QUEUE_PAGE, matrixUnoQueue),
    takeEvery(ActionTypes.SET_MATRIX_QUEUE_LINE, matrixUnoQueue),
    takeEvery(ActionTypes.SET_MATRIX_QUEUE_SEARCH, matrixUnoQueue),
  ])
}
