import * as ActionTypes from '../constants/superstar.constants'

/* Super Star Queue */
export const getSuperStarQueue = (matrixType) => ({
  type: ActionTypes.GET_SUPER_STAR_QUEUE_REQUEST,
  payload: { matrixType },
})
export const getSuperStarQueueSuccess = (matrixList) => ({
  type: ActionTypes.GET_SUPER_STAR_QUEUE_SUCCESS,
  payload: matrixList,
})
export const getSuperStarQueueError = (error) => ({
  type: ActionTypes.GET_SUPER_STAR_QUEUE_ERROR,
  payload: error,
})

export const setSuperStarQueuePage = (matrixType, page) => ({
  type: ActionTypes.SET_SUPER_STAR_QUEUE_PAGE,
  payload: { matrixType, page },
})
export const setSuperStarQueueSearch = (matrixType, search) => ({
  type: ActionTypes.SET_SUPER_STAR_QUEUE_SEARCH,
  payload: { matrixType, search },
})
export const setSuperStarInstallComet = (user) => ({
  type: ActionTypes.SET_SUPER_STAR_INSTALL_COMET,
  payload: user,
})

export const toggleSuperStarQueueModal = (visible) => ({
  type: ActionTypes.TOGGLE_SUPER_STAR_QUEUE_MODAL,
  payload: visible,
})
export const toggleSuperStarInstallCometsModal = (visible) => ({
  type: ActionTypes.TOGGLE_SUPER_STAR_INSTALL_COMETS_MODAL,
  payload: visible,
})
