import { types } from '../actions/types'

const initialState = {
  matrixInfo: JSON.parse(localStorage.getItem('matrixInfo')) || null,
  matrixCellInfo: JSON.parse(localStorage.getItem('matrixCellInfo')) || null,
}

const matrixReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SAVE_CURRENT_MATRIX: {
      localStorage.setItem('matrixInfo', JSON.stringify(payload))
      return { ...state, matrixInfo: payload }
    }

    case types.SAVE_CURRENT_MATRIX_CELL_INFO: {
      localStorage.setItem('matrixCellInfo', JSON.stringify(payload))
      return { ...state, matrixCellInfo: payload }
    }

    case types.SAVE_USER_MATRICES:
      return {
        ...state,
        matricesList: payload,
      }

    default:
      return state
  }
}

export default matrixReducer
