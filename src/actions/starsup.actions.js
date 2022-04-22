import * as ActionTypes from '../constants/starsup.constants'

/* Stars Up Info */
export const starsupInfo = () => ({
  type: ActionTypes.STARS_UP_INFO_REQUEST,
})
export const starsupInfoSuccess = (info) => ({
  type: ActionTypes.STARS_UP_INFO_SUCCESS,
  payload: info,
})
export const starsupInfoError = (error) => ({
  type: ActionTypes.STARS_UP_INFO_ERROR,
  payload: error,
})

/* Stars Up Users */
export const starsupUsers = (line) => ({
  type: ActionTypes.STARS_UP_USERS_REQUEST,
  payload: { line },
})
export const starsupUsersSuccess = (users) => ({
  type: ActionTypes.STARS_UP_USERS_SUCCESS,
  payload: users,
})
export const starsupUsersError = (error) => ({
  type: ActionTypes.STARS_UP_USERS_ERROR,
  payload: error,
})

export const setStarsupUsersPage = (page, line) => ({
  type: ActionTypes.SET_STARSUP_USERS_PAGE,
  payload: { page, line },
})

/* Stars Up Buy */
export const starsupBuy = (values, pack) => ({
  type: ActionTypes.STARS_UP_BUY_REQUEST,
  payload: { values, pack },
})
export const starsupBuySuccess = (payload) => ({
  type: ActionTypes.STARS_UP_BUY_SUCCESS,
  payload: payload,
})
export const starsupBuyError = (error) => ({
  type: ActionTypes.STARS_UP_BUY_ERROR,
  payload: error,
})

export const toggleStarsUpPackageBuySuccessModal = (visible) => ({
  type: ActionTypes.TOGGLE_STARS_UP_PACKAGE_BUY_SUCCESS_MODAL,
  payload: visible,
})

export const toggleStarsUpPlaceBuyModal = (visible) => ({
  type: ActionTypes.TOGGLE_STARS_UP_PLACE_BUY_MODAL,
  payload: visible,
})

/* Stars Up Levels */
export const starsupLevels = () => ({
  type: ActionTypes.STARS_UP_LEVELS_REQUEST,
})
export const starsupLevelsSuccess = (levels) => ({
  type: ActionTypes.STARS_UP_LEVELS_SUCCESS,
  payload: levels,
})
export const starsupLevelsError = (error) => ({
  type: ActionTypes.STARS_UP_LEVELS_ERROR,
  payload: error,
})

/* Stars Up Structure */
export const starsupStructure = (structureId) => ({
  type: ActionTypes.STARS_UP_STRUCTURE_REQUEST,
  payload: structureId,
})
export const starsupStructureSuccess = (structure) => ({
  type: ActionTypes.STARS_UP_STRUCTURE_SUCCESS,
  payload: structure,
})
export const starsupStructureError = (error) => ({
  type: ActionTypes.STARS_UP_STRUCTURE_ERROR,
  payload: error,
})

/* Stars Up Users For Install */
export const starsupUsersForInstall = (level) => ({
  type: ActionTypes.STARS_UP_USERS_FOR_INSTALL_REQUEST,
  payload: { level },
})
export const starsupUsersForInstallSuccess = (users) => ({
  type: ActionTypes.STARS_UP_USERS_FOR_INSTALL_SUCCESS,
  payload: users,
})
export const starsupUsersForInstallError = (error) => ({
  type: ActionTypes.STARS_UP_USERS_FOR_INSTALL_ERROR,
  payload: error,
})

export const setStarsupUsersForInstallPage = (page, level) => ({
  type: ActionTypes.SET_STARSUP_USERS_FOR_INSTALL_PAGE,
  payload: { page, level },
})

export const toggleStarsUpUsersForInstallModal = (visible, installUser) => ({
  type: ActionTypes.TOGGLE_STARS_UP_USERS_FOR_INSTALL_MODAL,
  payload: { visible, installUser },
})

/* Stars Up Install Matrix */
export const starsupInstallMatrix = (matrix, structureId) => ({
  type: ActionTypes.STARS_UP_INSTALL_MATRIX_REQUEST,
  payload: { matrix, structureId },
})
export const starsupInstallMatrixSuccess = () => ({
  type: ActionTypes.STARS_UP_INSTALL_MATRIX_SUCCESS,
})
export const starsupInstallMatrixError = (error) => ({
  type: ActionTypes.STARS_UP_INSTALL_MATRIX_ERROR,
  payload: error,
})

/* Stars Up Install Clones */
export const starsupInstallClone = (clone, structureId) => ({
  type: ActionTypes.STARS_UP_INSTALL_CLONE_REQUEST,
  payload: { clone, structureId },
})
export const starsupInstallCloneSuccess = () => ({
  type: ActionTypes.STARS_UP_INSTALL_CLONE_SUCCESS,
})
export const starsupInstallCloneError = (error) => ({
  type: ActionTypes.STARS_UP_INSTALL_CLONE_ERROR,
  payload: error,
})

/* Stars Up Super Bonus */
export const starsupSuperBonusList = () => ({
  type: ActionTypes.STARS_UP_SUPER_BONUS_REQUEST,
})
export const starsupSuperBonusListSuccess = (bonuses) => ({
  type: ActionTypes.STARS_UP_SUPER_BONUS_SUCCESS,
  payload: bonuses,
})
export const starsupSuperBonusListError = (error) => ({
  type: ActionTypes.STARS_UP_SUPER_BONUS_ERROR,
  payload: error,
})

/* Stars Up Active Super Bonus */
export const starsupActiveSuperBonus = (bonus) => ({
  type: ActionTypes.STARS_UP_ACTIVE_SUPER_BONUS_REQUEST,
  payload: bonus,
})
export const starsupActiveSuperBonusSuccess = () => ({
  type: ActionTypes.STARS_UP_ACTIVE_SUPER_BONUS_SUCCESS,
})
export const starsupActiveSuperBonusError = (error) => ({
  type: ActionTypes.STARS_UP_ACTIVE_SUPER_BONUS_ERROR,
  payload: error,
})

/* Stars Up Queue */
export const starsupQueue = (level, filter) => ({
  type: ActionTypes.STARS_UP_QUEUE_REQUEST,
  payload: { level, filter },
})
export const starsupQueueSuccess = (users) => ({
  type: ActionTypes.STARS_UP_QUEUE_SUCCESS,
  payload: users,
})
export const starsupQueueError = (error) => ({
  type: ActionTypes.STARS_UP_QUEUE_ERROR,
  payload: error,
})

export const setStarsupQueuePage = (page, level) => ({
  type: ActionTypes.SET_STARS_UP_QUEUE_PAGE,
  payload: { page, level },
})
export const setStarsupQueueLine = (line, level) => ({
  type: ActionTypes.SET_STARS_UP_QUEUE_LINE,
  payload: { line, level },
})
export const setStarsupQueueSearch = (name, level) => ({
  type: ActionTypes.SET_STARS_UP__QUEUE_SEARCH,
  payload: { name, level },
})

/* Stars Up Arrange Clones */
export const starsupArrangeClones = (clones) => ({
  type: ActionTypes.STARS_UP_ARRANGE_CLONES_REQUEST,
  payload: clones,
})
export const starsupArrangeClonesSuccess = () => ({
  type: ActionTypes.STARS_UP_ARRANGE_CLONES_SUCCESS,
})
export const starsupArrangeClonesError = (error) => ({
  type: ActionTypes.STARS_UP_ARRANGE_CLONES_ERROR,
  payload: error,
})

export const toggleStarsUpArrangeClonesModal = (visible) => ({
  type: ActionTypes.TOGGLE_STARS_UP_ARRANGE_CLONES_MODAL,
  payload: visible,
})

export const toggleStarsUpSuperBonusModal = (visible) => ({
  type: ActionTypes.TOGGLE_STARS_UP_SUPER_BONUS_MODAL,
  payload: visible,
})
