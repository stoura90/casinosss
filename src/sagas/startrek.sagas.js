import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'

import * as ActionTypes from '../constants/startrek.constants'
import * as actions from '../actions/startrek.actions'
import * as api from '../api/startrek.api'

export function* startrekStatistics() {
  try {
    const response = yield call(api.startrekStatistics)
    if (response) {
      yield put(actions.startrekStatisticsSuccess(response))
    }
  } catch (error) {
    yield put(actions.startrekStatisticsError(error))

    toast.error(error.message)
  }
}

export function* startrekStatistic() {
  try {
    const response = yield call(api.startrekStatistic)
    if (response) {
      yield put(actions.startrekStatisticSuccess(response))
    }
  } catch (error) {
    yield put(actions.startrekStatisticError(error))

    toast.error(error.message)
  }
}

export function* startrekBuy() {
  try {
    const response = yield call(api.startrekBuy)
    if (response) {
      const timer = dayjs().add(15, 's').format()
      localStorage.setItem('s', timer)
      yield put(actions.startrekBuySuccess(timer))
      yield put(actions.startrekStatistics())
    }
  } catch (error) {
    yield put(actions.startrekBuyError(error))

    toast.error(error.message)
  }
}

export function* startrekPlanets() {
  const { startrek } = yield select()
  try {
    const response = yield call(api.startrekPlanets, startrek.query)
    if (response) {
      yield put(actions.startrekPlanetsSuccess(response))
    }
  } catch (error) {
    yield put(actions.startrekPlanetsError(error))

    toast.error(error.message)
  }
}

export function* startrekPlanetsUpdate() {
  const { startrek } = yield select()
  try {
    const response = yield call(api.startrekPlanetsUpdate, startrek.selected)
    if (response) {
      yield put(actions.startrekPlanetsUpdateSuccess())
      yield put(actions.startrekPlanets())
      toast.success('Спасибо, Ваша заявка отправлена. Успешной работы!')
    }
  } catch (error) {
    yield put(actions.startrekPlanetsUpdateError(error))

    toast.error(error.message)
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.STARTREK_PLANETS_UPDATE_REQUEST, startrekPlanetsUpdate),
    takeEvery(ActionTypes.STARTREK_PLANETS_REQUEST, startrekPlanets),
    takeEvery(ActionTypes.STARTREK_STATISTIC_REQUEST, startrekStatistic),
    takeEvery(ActionTypes.STARTREK_STATISTICS_REQUEST, startrekStatistics),
    takeEvery(ActionTypes.SET_STARTREK_PLANETS_PAGE, startrekPlanets),
    takeEvery(ActionTypes.STARTREK_BUY_REQUEST, startrekBuy),
  ])
}
