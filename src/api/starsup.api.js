import { baseInstance } from './index'

export const starsupInfo = () => baseInstance({ url: 'api/stars-up/info', method: 'get' })

export const starsupUsers = (params) =>
  baseInstance({ url: 'api/stars-up/users', method: 'get', params })

export const starsupBuy = (data) => baseInstance({ url: 'api/stars-up/buy', method: 'post', data })

export const starsupLevels = () => baseInstance({ url: 'api/stars-up/levels', method: 'get' })

export const starsupStructure = (params) =>
  baseInstance({ url: 'api/stars-up/structure', method: 'get', params })

export const starsupUsersForInstall = (params) =>
  baseInstance({
    url: 'api/stars-up/users-for-install',
    method: 'get',
    params,
  })

export const starsupInstallMatrix = (data) =>
  baseInstance({ url: 'api/stars-up/install-matrix', method: 'post', data })

export const starsupInstallClone = (data) =>
  baseInstance({ url: 'api/stars-up/install-clone', method: 'post', data })

export const starsupSuperBonusList = () =>
  baseInstance({ url: 'api/stars-up/super-bonus', method: 'get' })

export const starsupActiveSuperBonus = (data) =>
  baseInstance({ url: 'api/stars-up/super-bonus', method: 'post', data })

export const starsupQueue = (params) =>
  baseInstance({ url: 'api/stars-up/queue', method: 'get', params })

export const starsupArrangeClones = (data) =>
  baseInstance({ url: 'api/stars-up/install-auto', method: 'post', data })
