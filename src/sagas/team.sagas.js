import { takeEvery, call, put, all, select } from 'redux-saga/effects'

import * as ActionTypes from '../constants/team.constants'
import * as actions from '../actions/team.actions'
import * as api from '../api/team.api'

export function* userStructure() {
  const { team } = yield select()
  try {
    const response = yield call(api.getUserStructure, team.query)
    if (response) {
      yield put(actions.userStructureSuccess(response))
    }
  } catch (error) {
    yield put(actions.userStructureError(error))
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.USER_STRUCTURE_REQUEST, userStructure),
    takeEvery(ActionTypes.SET_USER_STRUCTURE_PAGE, userStructure),
    takeEvery(ActionTypes.SET_USER_STRUCTURE_SEARCH, userStructure),
  ])
}
