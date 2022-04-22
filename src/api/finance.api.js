import { baseInstance } from './index'

export const transferMoneyToUser = (data) =>
  baseInstance({ url: 'wallet/transfer', method: 'post', data })
