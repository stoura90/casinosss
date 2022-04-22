import * as ActionTypes from '../constants/team.constants'

/* User Structure */
export const userStructure = (userId = null) => ({
  type: ActionTypes.USER_STRUCTURE_REQUEST,
  payload: userId,
})
export const userStructureSuccess = (structure) => ({
  type: ActionTypes.USER_STRUCTURE_SUCCESS,
  payload: structure,
})
export const userStructureError = (error) => ({
  type: ActionTypes.USER_STRUCTURE_ERROR,
  payload: error,
})

export const setUserStructurePage = (userId, page) => ({
  type: ActionTypes.SET_USER_STRUCTURE_PAGE,
  payload: { userId, page },
})
export const setUserStructureSearch = (userId, search) => ({
  type: ActionTypes.SET_USER_STRUCTURE_SEARCH,
  payload: { userId, search },
})
