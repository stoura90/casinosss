import { baseInstance } from './index'

export const getUserStructure = (params) =>
  baseInstance({ url: 'structure', method: 'get', params })
