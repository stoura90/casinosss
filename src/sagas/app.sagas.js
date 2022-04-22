import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { saveAs } from 'file-saver'
import dayjs from 'dayjs'

import * as ActionTypes from '../constants/app.constants'
import * as actions from '../actions/app.actions'
import * as api from '../api/app.api'

export function* userInfo() {
  try {
    const userInfo = yield call(api.userInfo)
    if (userInfo) {
      yield put(actions.userInfoSuccess(userInfo))
      yield wishesVisible()
    }
  } catch (error) {
    yield put(actions.userInfoError(error))

    toast.error(error.message)
  }
}

export function* wishesVisible() {
  const lsName = 'w'
  const diffTime = 28800
  const w = localStorage.getItem(lsName)

  if (w) {
    const diff = dayjs(w).diff(dayjs().format(), 's')
    const updateTime = dayjs().add(diffTime, 's').format()
    if (diff < 1) {
      localStorage.setItem(lsName, updateTime)
      yield put(actions.toggleWelcomeModal(true))
    } else if (diff > diffTime) {
      localStorage.setItem(lsName, updateTime)
    }
  } else {
    const initTimer = dayjs().add(diffTime, 's').format()
    localStorage.setItem(lsName, initTimer)
  }
}

export function* changeUserInfo({ payload, callback }) {
  try {
    const userInfo = yield call(api.changeUserInfo, payload)
    if (userInfo) {
      yield put(actions.changeUserInfoSuccess(userInfo))

      toast.success('Данные успешно обновлены')
      callback && callback()
    }
  } catch (error) {
    yield put(actions.changeUserInfoError(error))

    toast.error(error.message)
  }
}

export function* changePassword({ payload, callback }) {
  try {
    const response = yield call(api.changePassword, payload)
    if (response) {
      yield put(actions.changePasswordSuccess())

      toast.success('Пароль успешно обновлен')
      callback && callback()
    }
  } catch (error) {
    yield put(actions.changePasswordError(error))

    toast.error(error.message)
  }
}

export function* changeFinancePassword({ payload, callback }) {
  const { hasFinPassword } = yield select((state) => state.app.user)
  const toastMessage = `Финансовый пароль успешно ${hasFinPassword ? 'обновлен' : 'добавлен'}!`

  try {
    const response = yield call(api.changeFinancePassword, payload)
    if (response) {
      yield put(actions.changeFinancePasswordSuccess())

      toast.success(toastMessage)
      callback && callback()
    }
  } catch (error) {
    yield put(actions.changeFinancePasswordError(error))

    toast.error(error.message)
  }
}

export function* changeSocial({ payload, callback }) {
  try {
    const response = yield call(api.changeSocial, payload)
    if (response) {
      yield put(actions.changeSocialSuccess(response))

      toast.success('Социальные сети успешно обновлены')
      callback && callback()
    }
  } catch (error) {
    yield put(actions.changeSocialError(error))

    toast.error(error.message)
  }
}

export function* changeDescription({ payload, callback }) {
  try {
    const response = yield call(api.changeDescription, payload)
    if (response) {
      yield put(actions.changeDescriptionSuccess(response))

      toast.success('Описание успешно обновлен')
      callback && callback()
    }
  } catch (error) {
    yield put(actions.changeDescriptionError(error))

    toast.error(error.message)
  }
}

export function* changeAutoRefillPlanets({ payload }) {
  try {
    const response = yield call(api.changeAutoRefillPlanets, payload)
    if (response) {
      yield put(actions.changeAutoRefillPlanetsSuccess(payload.auto))

      toast.success(`Автоматическое обновление планет ${payload.auto ? 'включено' : 'выключено'}`)
    }
  } catch (error) {
    yield put(actions.changeAutoRefillPlanetsError(error))

    toast.error(error.message)
  }
}

export function* publishSummaryToTelegram({ payload }) {
  const { app } = yield select()
  try {
    const response = yield call(api.uploadImageToTelegram, payload)
    if (response) {
      yield put(actions.publishSummaryToTelegramSuccess())
      toast.success('Успешно опубликовано')

      if (app.user) {
        const filename = app.user?.firstName.trim()
          ? `stars-summary-${app.user?.firstName.trim()}`
          : 'stars-summary'

        saveAs(payload, `${filename}.jpeg`)
      }
    }
  } catch (error) {
    yield put(actions.publishSummaryToTelegramError(error))
    toast.error(error.message)
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.USER_INFO_REQUEST, userInfo),
    takeEvery(ActionTypes.CHANGE_USER_INFO_REQUEST, changeUserInfo),
    takeEvery(ActionTypes.CHANGE_PASSWORD_REQUEST, changePassword),
    takeEvery(ActionTypes.CHANGE_FINANCE_PASSWORD_REQUEST, changeFinancePassword),
    takeEvery(ActionTypes.CHANGE_SOCIAL_REQUEST, changeSocial),
    takeEvery(ActionTypes.CHANGE_DESCRIPTION_REQUEST, changeDescription),
    takeEvery(ActionTypes.PUBLISH_SUMMARY_TO_TELEGRAM_UPLOAD, publishSummaryToTelegram),
    takeEvery(ActionTypes.CHANGE_AUTO_REFILL_PLANET_REQUEST, changeAutoRefillPlanets),
  ])
}
