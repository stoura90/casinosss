import React from 'react'
import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import isEmpty from 'lodash-es/isEmpty'
import { toast } from 'react-toastify'

import r from '../constants/routes.constants'
import * as ActionTypes from '../constants/casino.constants'
import * as actions from '../actions/casino.actions'
import * as api from '../api/casino.api'

export function* casinoDrawPrizes({ payload }) {
  try {
    const response = yield call(api.casinoDrawPrizes, payload)
    if (response) {
      yield put(actions.casinoDrawPrizesSuccess(response.items))
    }
  } catch (error) {
    yield put(actions.casinoDrawPrizesError(error))
  }
}

export function* casinoDrawCreate({ payload }) {
  try {
    const response = yield call(api.casinoDrawCreate, payload)
    if (response) {
      yield put(actions.toggleCasinoDrawCreateModal())
      yield put(actions.casinoDrawCreateSuccess())
      yield put(actions.casinoActiveList())

      toast.success(
        <>
          <div>Ваш Розыгрыш запущен!</div>
          <div>
            Спасибо за участие в <strong>LuckyStar</strong>, желаем удачи!
          </div>
        </>,
      )
    }
  } catch (error) {
    yield put(actions.casinoDrawCreateError(error))

    toast.error(error.message)
  }
}

export function* casinoDrawBuy({ payload }) {
  try {
    const response = yield call(api.casinoDrawBuy, payload)
    if (response) {
      yield put(actions.toggleCasinoDrawBuyModal())
      yield put(actions.casinoDrawBuySuccess())
      yield put(actions.casinoActiveList())

      // redirect to to active draw
      yield put(push(`${r.casino}/draw/${response.id}`))

      toast.success(
        <div>
          Спасибо за участие в <strong>LuckyStar</strong>, желаем удачи!
        </div>,
      )
    }
  } catch (error) {
    yield put(actions.casinoDrawBuyError(error))

    toast.error(error.message)
  }
}

export function* casinoDrawCancel({ payload }) {
  try {
    const { status } = yield call(api.casinoDrawCancel, payload)
    if (status) {
      yield put(actions.casinoDrawCancelSuccess())
      yield put(actions.casinoActiveList())

      toast.success('Розыгрыш успешно отменен.')
    }
  } catch (error) {
    yield put(actions.casinoDrawCancelError(error))

    toast.error(error.message)
  }
}

export function* casinoDraw({ payload }) {
  try {
    const response = yield call(api.casinoDraw, { id: payload })
    if (response) {
      yield put(actions.casinoDrawSuccess(response))
    }
  } catch (error) {
    yield put(actions.casinoDrawError(error))
  }
}

// TODO: not used
export function* casinoDrawMy({ payload }) {
  try {
    const response = yield call(api.casinoDrawMy, payload)
    if (response) {
      // yield put(actions.casinoDrawMySuccess());
    }
  } catch (error) {
    // yield put(actions.casinoDrawMyError(error));
  }
}

export function* casinoActiveList() {
  const { casino } = yield select()

  try {
    let adminDraw = null
    const listQuery = { ...casino.active.query }
    if (!listQuery.offset) {
      adminDraw = yield call(api.casinoDrawAdmin)

      if (!isEmpty(adminDraw)) {
        // load one less item if we have an admin draw
        listQuery.limit = listQuery.limit - 1
      }
    }

    const response = yield call(api.casinoList, listQuery)
    if (response) {
      const newResponse = { ...response }
      if (!isEmpty(adminDraw)) {
        // mixing the admin draw first
        newResponse.items.unshift(adminDraw)
      }
      yield put(actions.casinoActiveListSuccess(newResponse))
    }
  } catch (error) {
    yield put(actions.casinoActiveListError(error))
  }
}

export function* casinoEndedList() {
  const { casino } = yield select()

  try {
    const response = yield call(api.casinoListWinners, casino.ended.query)
    if (response) {
      yield put(actions.casinoEndedListSuccess(response))
    }
  } catch (error) {
    yield put(actions.casinoEndedListError(error))
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.CASINO_DRAW_PRIZES_REQUEST, casinoDrawPrizes),
    takeEvery(ActionTypes.CASINO_DRAW_CREATE_REQUEST, casinoDrawCreate),
    takeEvery(ActionTypes.CASINO_DRAW_CANCEL_REQUEST, casinoDrawCancel),
    takeEvery(ActionTypes.CASINO_DRAW_BUY_REQUEST, casinoDrawBuy),
    takeEvery(ActionTypes.CASINO_DRAW_MY_REQUEST, casinoDrawMy),
    takeEvery(ActionTypes.CASINO_DRAW_REQUEST, casinoDraw),
    takeEvery(ActionTypes.CASINO_ACTIVE_LIST_REQUEST, casinoActiveList),
    takeEvery(ActionTypes.SET_CASINO_ACTIVE_LIST_PAGE, casinoActiveList),
    takeEvery(ActionTypes.SET_CASINO_ACTIVE_LIST_SEARCH, casinoActiveList),
    takeEvery(ActionTypes.CASINO_ENDED_LIST_REQUEST, casinoEndedList),
    takeEvery(ActionTypes.SET_CASINO_ENDED_LIST_PAGE, casinoEndedList),
    takeEvery(ActionTypes.SET_CASINO_ENDED_IS_MY, casinoEndedList),
  ])
}
