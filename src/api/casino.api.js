import { baseInstance } from './index'

export const casinoDrawPrizes = () => baseInstance({ url: 'api/casino/get-prizes', method: 'get' })

export const casinoDrawCreate = (data) =>
  baseInstance({ url: 'api/casino/create', method: 'post', data })

export const casinoDrawBuy = (data) => baseInstance({ url: 'api/casino/buy', method: 'post', data })

export const casinoDrawCancel = (data) =>
  baseInstance({ url: 'api/casino/cancel', method: 'post', data })

export const casinoDraw = (params) => baseInstance({ url: 'api/casino/get', method: 'get', params })

export const casinoDrawMy = () => baseInstance({ url: 'api/casino/get-my', method: 'get' })

export const casinoList = (params) =>
  baseInstance({ url: 'api/casino/list', method: 'get', params })

export const casinoListWinners = (params) =>
  baseInstance({ url: 'api/casino/list-winners', method: 'get', params })

export const casinoDrawAdmin = () => baseInstance({ url: 'api/casino/admin', method: 'get' })
