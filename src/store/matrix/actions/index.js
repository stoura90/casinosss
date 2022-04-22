import { types } from './types'

export const matrixActions = {
  saveCurrentMatrix(matrixInfo) {
    return {
      type: types.SAVE_CURRENT_MATRIX,
      payload: matrixInfo,
    }
  },
  saveCurrentMatrixCellInfo(cellInfo) {
    return {
      type: types.SAVE_CURRENT_MATRIX_CELL_INFO,
      payload: cellInfo,
    }
  },
  saveUserMatrices(matricesInfo) {
    return {
      type: types.SAVE_USER_MATRICES,
      payload: matricesInfo,
    }
  },
}
