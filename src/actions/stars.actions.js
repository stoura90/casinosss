import * as ActionTypes from '../constants/stars.constants'
export const matrixMiniQueue = (matrixType, filter) => ({
  type: ActionTypes.MATRIX_QUEUE_REQUEST,
  payload: { matrixType, filter },
})
export const matrixMiniQueueSuccess = (planets) => ({
  type: ActionTypes.MATRIX_QUEUE_SUCCESS,
  payload: planets,
})
export const matrixMiniQueueError = (error) => ({
  type: ActionTypes.MATRIX_QUEUE_ERROR,
  payload: error,
})
export const setMatrixMiniQueuePage = (page, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_PAGE,
  payload: { page, matrixType },
})
export const setMatrixMiniQueueLine = (line, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_LINE,
  payload: { line, matrixType },
})
export const setMatrixMiniQueueSearch = (name, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_SEARCH,
  payload: { name, matrixType },
})
//Uno
export const matrixUnoQueue = (matrixType, filter) => ({
  type: ActionTypes.MATRIX_QUEUE_REQUEST,
  payload: { matrixType, filter },
})
export const matrixUnoQueueSuccess = (planets) => ({
  type: ActionTypes.MATRIX_QUEUE_SUCCESS,
  payload: planets,
})
export const matrixUnoQueueError = (error) => ({
  type: ActionTypes.MATRIX_QUEUE_ERROR,
  payload: error,
})
export const setMatrixUnoQueuePage = (page, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_PAGE,
  payload: { page, matrixType },
})
export const setMatrixUnoQueueLine = (line, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_LINE,
  payload: { line, matrixType },
})
export const setMatrixUnoQueueSearch = (name, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_SEARCH,
  payload: { name, matrixType },
})
/* Stars Matrix Queue */
export const matrixQueue = (matrixType, filter) => ({
  type: ActionTypes.MATRIX_QUEUE_REQUEST,
  payload: { matrixType, filter },
})
export const matrixQueueSuccess = (planets) => ({
  type: ActionTypes.MATRIX_QUEUE_SUCCESS,
  payload: planets,
})
export const matrixQueueError = (error) => ({
  type: ActionTypes.MATRIX_QUEUE_ERROR,
  payload: error,
})

export const setMatrixQueuePage = (page, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_PAGE,
  payload: { page, matrixType },
})
export const setMatrixQueueLine = (line, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_LINE,
  payload: { line, matrixType },
})
export const setMatrixQueueSearch = (name, matrixType) => ({
  type: ActionTypes.SET_MATRIX_QUEUE_SEARCH,
  payload: { name, matrixType },
})
