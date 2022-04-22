import { baseInstance } from './index'

export const getSuperStarQueue = (params) =>
  baseInstance({ url: 'matrix/super/queue', method: 'get', params })
