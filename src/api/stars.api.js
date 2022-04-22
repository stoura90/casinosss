import { baseInstance } from './index'

export const matrixQueue = (params) =>
  baseInstance({ url: 'matrix/get-matrix-queue', method: 'get', params })
export const matrixUnoQueue = (params) =>
  baseInstance({ url: 'matrix/uno/get-matrix-queue', method: 'get', params })
export const matrixMiniQueue = (params) =>
  baseInstance({ url: 'matrix/mini/get-matrix-queue', method: 'get', params })
