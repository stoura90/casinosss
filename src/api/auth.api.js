import { createFormDataObj } from '../utils'
import { baseInstance } from './index'

export const signUp = (userInfo) =>
  baseInstance({
    url: '/user/registration',
    method: 'post',
    data: userInfo,
  })

export const signIn = (credentials) =>
  baseInstance({
    url: '/auth/token',
    method: 'post',
    data: createFormDataObj({ ...credentials, grant_type: 'password' }),
  })

export const inviter = (params) => baseInstance({ url: '/inviter', method: 'get', params })
