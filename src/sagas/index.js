import { all } from 'redux-saga/effects'

import appSagas from './app.sagas'
import authSagas from './auth.sagas'
import teamSagas from './team.sagas'
import newsSagas from './news.sagas'
import casinoSagas from './casino.sagas'
import financeSagas from './finance.sagas'
import startrekSagas from './startrek.sagas'
import superstarSagas from './superstar.sagas'
import starsupSagas from './starsup.sagas'
import starsSagas from './stars.sagas'
import matrixUnoQueue from './uno.sagas'

export default function* mainSaga() {
  yield all([
    appSagas(),
    authSagas(),
    teamSagas(),
    newsSagas(),
    casinoSagas(),
    financeSagas(),
    startrekSagas(),
    superstarSagas(),
    starsupSagas(),
    starsSagas(),
    matrixUnoQueue(),
  ])
}
