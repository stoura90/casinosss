import { takeEvery, call, put, all, select } from 'redux-saga/effects'

import * as ActionTypes from '../constants/superstar.constants'
import * as actions from '../actions/superstar.actions'
import * as api from '../api/superstar.api'

export function* getSuperStarQueue({ payload }) {
  const { superstar } = yield select()
  try {
    const response = yield call(api.getSuperStarQueue, {
      matrixType: payload.matrixType,
      ...superstar.queue.query,
    })
    if (response) {
      yield put(actions.getSuperStarQueueSuccess(response))
    }
  } catch (error) {
    yield put(actions.getSuperStarQueueError(error))
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.GET_SUPER_STAR_QUEUE_REQUEST, getSuperStarQueue),
    takeEvery(ActionTypes.SET_SUPER_STAR_QUEUE_SEARCH, getSuperStarQueue),
    takeEvery(ActionTypes.SET_SUPER_STAR_QUEUE_PAGE, getSuperStarQueue),
  ])
}
