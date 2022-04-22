import { takeEvery, call, put, all, delay, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { declOfNum } from '../utils'

import * as ActionTypes from '../constants/starsup.constants'
import * as actions from '../actions/starsup.actions'
import * as api from '../api/starsup.api'

export function* starsupInfo() {
  try {
    const [info, levels, bonuses] = yield all([
      call(api.starsupInfo),
      call(api.starsupLevels),
      call(api.starsupSuperBonusList),
    ])
    if (info) {
      yield put(actions.starsupLevelsSuccess(levels))
      yield put(actions.starsupInfoSuccess(info))
      yield put(actions.starsupSuperBonusListSuccess(bonuses))
    }
  } catch (error) {
    yield put(actions.starsupInfoError(error))

    toast.error(error.message)
  }
}

export function* starsupBuy({ payload }) {
  const { values, pack } = payload
  try {
    const response = yield call(api.starsupBuy, values)
    if (response) {
      yield put(actions.starsupBuySuccess({ ...values, pack }))
      yield put(actions.toggleStarsUpPackageBuySuccessModal())
    }
    yield put(actions.starsupInfo())
  } catch (error) {
    yield put(actions.starsupBuyError(error))

    toast.error(error.message)
  }
}

export function* starsupUsers({ payload }) {
  const { starsup } = yield select()
  try {
    const response = yield call(api.starsupUsers, {
      line: payload.line,
      ...starsup.query,
    })
    if (response) {
      yield put(actions.starsupUsersSuccess(response))
    }
  } catch (error) {
    yield put(actions.starsupUsersError(error))

    toast.error(error.message)
  }
}

export function* starsupStructure({ payload }) {
  yield delay(1000)
  try {
    const response = yield call(api.starsupStructure, payload)
    if (response) {
      yield put(actions.starsupStructureSuccess(response))
    }
  } catch (error) {
    yield put(actions.starsupStructureError(error))

    toast.error(error.message)
  }
}

export function* starsupInstallClone({ payload }) {
  const { clone, structureId } = payload
  try {
    const response = yield call(api.starsupInstallClone, clone)
    if (response) {
      yield put(actions.starsupInstallCloneSuccess())
      yield put(actions.starsupStructure(structureId))
    }
  } catch (error) {
    yield put(actions.starsupStructureError(error))

    toast.error(error.message)
  }
}

export function* starsupUsersForInstall({ payload }) {
  const { starsupTable } = yield select()
  try {
    const response = yield call(api.starsupUsersForInstall, {
      level: payload.level,
      ...starsupTable.users.query,
    })
    if (response) {
      yield put(actions.starsupUsersForInstallSuccess(response))
    }
  } catch (error) {
    yield put(actions.starsupUsersForInstallError(error))

    toast.error(error.message)
  }
}

export function* starsupInstallMatrix({ payload }) {
  const { matrix, structureId } = payload
  try {
    const response = yield call(api.starsupInstallMatrix, matrix)
    if (response) {
      yield put(actions.toggleStarsUpUsersForInstallModal(false, null))
      yield put(actions.starsupInstallMatrixSuccess())
      yield put(actions.starsupStructure(structureId))
    }
  } catch (error) {
    yield put(actions.starsupInstallMatrixError(error))

    toast.error(error.message)
  }
}

export function* starsupQueue({ payload }) {
  const { starsupTable } = yield select()

  try {
    const response = yield call(api.starsupQueue, {
      level: payload.level,
      ...starsupTable.queue.query,
    })
    if (response) {
      yield put(actions.starsupQueueSuccess(response))
    }
  } catch (error) {
    yield put(actions.starsupQueueError(error))

    toast.error(error.message)
  }
}

export function* starsupArrangeClones({ payload }) {
  try {
    const response = yield call(api.starsupArrangeClones, payload)
    if (response) {
      yield put(actions.starsupArrangeClonesSuccess(response))
      yield put(actions.toggleStarsUpArrangeClonesModal(false))
      yield put(actions.starsupStructure({ level: payload.level }))
      toast.success(
        `${payload.count} ${declOfNum(payload.count, [
          'клона',
          'клона',
          'клонов',
        ])} успешно расставлено!`,
      )
    }
  } catch (error) {
    yield put(actions.starsupArrangeClonesError(error))

    toast.error(error.message)
  }
}

function* starsupSuperBonusList() {
  try {
    const response = yield call(api.starsupSuperBonusList)
    if (response) {
      yield put(actions.starsupSuperBonusListSuccess(response))
    }
  } catch (error) {
    yield put(actions.starsupSuperBonusListError(error))

    toast.error(error.message)
  }
}

function* starsupActiveSuperBonus({ payload }) {
  try {
    const response = yield call(api.starsupActiveSuperBonus, payload)
    if (response) {
      yield put(actions.starsupActiveSuperBonusSuccess(response))
      yield put(actions.toggleStarsUpSuperBonusModal())
    }
  } catch (error) {
    yield put(actions.starsupActiveSuperBonusError(error))

    toast.error(error.message)
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.STARS_UP_USERS_REQUEST, starsupUsers),
    takeEvery(ActionTypes.STARS_UP_INFO_REQUEST, starsupInfo),
    takeEvery(ActionTypes.STARS_UP_BUY_REQUEST, starsupBuy),
    takeEvery(ActionTypes.SET_STARSUP_USERS_PAGE, starsupUsers),
    takeEvery(ActionTypes.STARS_UP_STRUCTURE_REQUEST, starsupStructure),
    takeEvery(ActionTypes.STARS_UP_INSTALL_CLONE_REQUEST, starsupInstallClone),
    takeEvery(ActionTypes.STARS_UP_INSTALL_MATRIX_REQUEST, starsupInstallMatrix),
    takeEvery(ActionTypes.STARS_UP_USERS_FOR_INSTALL_REQUEST, starsupUsersForInstall),
    takeEvery(ActionTypes.SET_STARSUP_USERS_FOR_INSTALL_PAGE, starsupUsersForInstall),
    takeEvery(ActionTypes.STARS_UP_QUEUE_REQUEST, starsupQueue),
    takeEvery(ActionTypes.SET_STARS_UP_QUEUE_PAGE, starsupQueue),
    takeEvery(ActionTypes.SET_STARS_UP_QUEUE_LINE, starsupQueue),
    takeEvery(ActionTypes.SET_STARS_UP__QUEUE_SEARCH, starsupQueue),
    takeEvery(ActionTypes.STARS_UP_ARRANGE_CLONES_REQUEST, starsupArrangeClones),
    takeEvery(ActionTypes.STARS_UP_SUPER_BONUS_REQUEST, starsupSuperBonusList),
    takeEvery(ActionTypes.STARS_UP_ACTIVE_SUPER_BONUS_REQUEST, starsupActiveSuperBonus),
  ])
}
