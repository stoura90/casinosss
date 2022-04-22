import { baseInstance } from './index'

export const userInfo = () => baseInstance({ url: '/user', method: 'get' })

export const changeUserInfo = (data) => baseInstance({ url: '/user/fio', method: 'post', data })

export const changePassword = (data) =>
  baseInstance({ url: '/user/password', method: 'post', data })

export const changeFinancePassword = (data) =>
  baseInstance({ url: 'settings/fin-password', method: 'post', data })

export const changeSocial = (data) => baseInstance({ url: 'user/links', method: 'post', data })

export const changeDescription = (data) =>
  baseInstance({ url: 'user/description', method: 'post', data })

export const changeAutoRefillPlanets = (data) =>
  baseInstance({ url: 'star-trek/auto-update', method: 'post', data })

export const uploadImageToTelegram = (blobImage) => {
  const formData = new FormData()
  formData.append('file', blobImage)
  return baseInstance({
    url: 'user/to-telegram',
    method: 'post',
    data: formData,
  })
}
