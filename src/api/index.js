import axios from 'axios'
import Raven from 'raven-js'
import { getAccessToken, createFormDataObj } from '../utils'
import * as actions from '../actions/auth.actions'
import { store } from '../index'

export const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

baseInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    Raven.captureException(error)
    return Promise.reject(error)
  },
)

baseInstance.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    Raven.captureException(error)
    if (error?.response?.status === 401) {
      const timer = localStorage.getItem('w')
      localStorage.clear()
      localStorage.setItem('w', timer)

      store.dispatch(actions.signOut())
    } else if (error?.response) {
      // Global path to error message
      throw new Error(error?.response?.data?.message)
    } else {
      throw new Error(error?.message)
    }
  },
)

export const api = {
  // Auth
  createClient() {
    return baseInstance.get('create-client')
  },
  signIn(credentials) {
    return baseInstance.post(
      '/auth/token',
      createFormDataObj({ ...credentials, grant_type: 'password' }),
    )
  },
  signUp(userInfo) {
    return baseInstance.post('/user/registration', userInfo)
  },
  resetPassword(email) {
    return baseInstance.post('registration/restore-password', { email })
  },
  // User
  getUserInfo() {
    return baseInstance.get('/user')
  },
  updateAvatar(avatar) {
    return baseInstance.post('user/avatar', createFormDataObj({ avatar }))
  },
  searchUserByLogin({ user_name, matrix_type }) {
    return baseInstance.get(`/user/find?user_name=${user_name}&matrix_type=${matrix_type}`)
  },

  getMatrixMiniTypes() {
    return baseInstance.get('/matrix/mini/type')
  },
  getMatrixMiniCloneStatTypes() {
    return baseInstance.get('matrix/mini/clone-stat')
  },
  getMatrixMiniStructureByType(type) {
    return baseInstance.get(`matrix/mini/structure?matrix_type=${type}`)
  },
  getMatrixMiniStructureById(id) {
    return baseInstance.get(`matrix/mini/structure?matrix_id=${id}`)
  },
  buyMatrixMini(matrix_id) {
    return baseInstance.post('matrix/mini/buy', { matrix_id })
  },
  getMatrixMiniListForInstall(matrix_type) {
    return baseInstance.get(`matrix/mini/for-install?matrix_type=${matrix_type}`)
  },
  installMatrixMini(matrixInfo) {
    return baseInstance.post('matrix/mini/install', matrixInfo)
  },
  getMatrixMiniClonesCout(matrix_type) {
    return baseInstance.get(`matrix/mini/clone?matrix_type=${matrix_type}`)
  },
  arrangeMatrixMiniClones(matrixClonesInfo) {
    return baseInstance.post('matrix/mini/install-clone', matrixClonesInfo)
  },
  getNeighboringMatricesMini(matrixType) {
    return baseInstance.get(`matrix/mini/dash-info?matrix_type=${matrixType}`)
  },
  setMiniClone(matrixInfo) {
    return baseInstance.post('matrix/mini/target-install-clone', matrixInfo)
  },
  // Matricesx
  getMatrixUnoTypes() {
    return baseInstance.get('/matrix/uno/type')
  },
  getMatrixUnoCloneStatTypes() {
    return baseInstance.get('matrix/uno/clone-stat')
  },
  getMatrixUnoStructureByType(type) {
    return baseInstance.get(`matrix/uno/structure?matrix_type=${type}`)
  },
  getMatrixUnoStructureById(id) {
    return baseInstance.get(`matrix/uno/structure?matrix_id=${id}`)
  },
  buyMatrixUno(matrix_id) {
    return baseInstance.post('matrix/uno/buy', { matrix_id })
  },
  getMatrixUnoListForInstall(matrix_type) {
    return baseInstance.get(`matrix/uno/for-install?matrix_type=${matrix_type}`)
  },
  installMatrixUno(matrixInfo) {
    return baseInstance.post('matrix/uno/install', matrixInfo)
  },
  getMatrixUnoClonesCout(matrix_type) {
    return baseInstance.get(`matrix/uno/clone?matrix_type=${matrix_type}`)
  },
  arrangeMatrixUnoClones(matrixClonesInfo) {
    return baseInstance.post('matrix/uno/install-clone', matrixClonesInfo)
  },
  getNeighboringMatricesUno(matrixType) {
    return baseInstance.get(`matrix/uno/dash-info?matrix_type=${matrixType}`)
  },
  setUnoClone(matrixInfo) {
    return baseInstance.post('matrix/uno/target-install-clone', matrixInfo)
  },
  // Matrices
  getMatrixTypes() {
    return baseInstance.get('/matrix/type')
  },
  getMatrixCloneStatTypes() {
    return baseInstance.get('matrix/clone-stat')
  },
  getMatrixStructureByType(type) {
    return baseInstance.get(`matrix/structure?matrix_type=${type}`)
  },
  getMatrixStructureById(id) {
    return baseInstance.get(`matrix/structure?matrix_id=${id}`)
  },
  buyMatrix(matrix_id) {
    return baseInstance.post('matrix/buy', { matrix_id })
  },
  getMatrixListForInstall(matrix_type) {
    return baseInstance.get(`matrix/for-install?matrix_type=${matrix_type}`)
  },
  installMatrix(matrixInfo) {
    return baseInstance.post('matrix/install', matrixInfo)
  },
  getMatrixClonesCout(matrix_type) {
    return baseInstance.get(`matrix/clone?matrix_type=${matrix_type}`)
  },
  arrangeMatrixClones(matrixClonesInfo) {
    return baseInstance.post('matrix/install-clone', matrixClonesInfo)
  },
  getNeighboringMatrices(matrixType) {
    return baseInstance.get(`matrix/dash-info?matrix_type=${matrixType}`)
  },
  setClone(matrixInfo) {
    return baseInstance.post('matrix/target-install-clone', matrixInfo)
  },
  // Auto matrices
  getAutoMatrixTypes() {
    return baseInstance.get('matrix/auto/type')
  },
  getAutoMatrixStructureByType(type) {
    return baseInstance.get(`matrix/auto/structure?matrix_type=${type}`)
  },
  getAutoMatrixStructureById(id) {
    return baseInstance.get(`matrix/auto/structure?matrix_id=${id}`)
  },
  buyAutoMatrix(matrix_id) {
    return baseInstance.post('matrix/auto/buy', { matrix_id })
  },
  getAutoMatrixListForInstall(matrix_type) {
    return baseInstance.get(`matrix/auto/for-install?matrix_type=${matrix_type}`)
  },
  installAutoMatrix(matrixInfo) {
    return baseInstance.post('matrix/auto/install', matrixInfo)
  },
  getAutoMatrixClonesCout(matrix_type) {
    return baseInstance.get(`matrix/auto/clone?matrix_type=${matrix_type}`)
  },
  arrangeAutoMatrixClones(matrixClonesInfo) {
    return baseInstance.post('matrix/auto/install-clone', matrixClonesInfo)
  },
  getNeighboringAutoMatrices(matrixType) {
    return baseInstance.get(`matrix/auto/dash-info?matrix_type=${matrixType}`)
  },
  setAutoClone(matrixInfo) {
    return baseInstance.post('matrix/auto/target-install-clone', matrixInfo)
  },
  getUpperAutoStructureById(matrixId) {
    return baseInstance.get(`matrix/auto/structure-upper?matrix_id=${matrixId}`)
  },
  // Wallet
  getTransactionsHistory({ limit, offset }) {
    return baseInstance.get(`wallet/transactions?limit=${limit}&offset=${offset}`)
  },
  createWithdraw(withdrawInfo) {
    return baseInstance.post('wallet/create-withdraw', withdrawInfo)
  },
  createPay(payInfo) {
    return baseInstance.post('wallet/create-pay', payInfo)
  },
  createPayeerPay(payInfo) {
    return baseInstance.post('wallet/create-payeer-pay', payInfo)
  },
  getUpperStructureById(matrixId) {
    return baseInstance.get(`matrix/structure-upper?matrix_id=${matrixId}`)
  },
  // School
  getComments() {
    return baseInstance.get('school/comments')
  },
  createRequestToSchool(data) {
    return baseInstance.post('school/create', data)
  },
  createComment(text) {
    return baseInstance.post('school/create-comment', { text })
  },
  // News
  getNewsList({ limit, offset }) {
    return baseInstance.get(`news/get?offset=${offset}&limit=${limit}`)
  },
  getNewsById(id) {
    return baseInstance.get(`news/get-one?news_id=${id}`)
  },

  /* SUPER STARS */
  ssBuyMatrix(matrix_id) {
    return baseInstance.post('matrix/super/buy', { matrix_id })
  },
  ssMatrixTypes() {
    return baseInstance.get('matrix/super/type')
  },
  ssMatrixClones(matrix_type) {
    return baseInstance.get(`matrix/super/clone?matrix_type=${matrix_type}`)
  },
  ssMatrixStructureByType(type) {
    return baseInstance.get(`matrix/super/structure?matrix_type=${type}`)
  },
  ssMatrixStructureById(id) {
    return baseInstance.get(`matrix/super/structure?matrix_id=${id}`)
  },
  ssInstallMatrixClones(matrixClonesInfo) {
    return baseInstance.post('matrix/super/install-clone', matrixClonesInfo)
  },
  ssBuyMatrixClones(matrixClonesInfo) {
    return baseInstance.post('matrix/super/buy-comet', matrixClonesInfo)
  },
  ssNeighboringMatrices(matrixType) {
    return baseInstance.get(`matrix/super/dash-info?matrix_type=${matrixType}`)
  },
}
