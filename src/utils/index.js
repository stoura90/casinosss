import Resizer from 'react-image-file-resizer'
import dayjs from 'dayjs'

// Validation

export const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const isValidPassword = (password) => {
  const passwordValidation = /^.{6,}$/
  return passwordValidation.test(password)
}

export const isValidUsername = (username) => {
  const usernameValidation = /^[A-Za-z0-9]+$/
  return usernameValidation.test(username)
}

export const isValidPhone = (number) => {
  const numberValidation = /^\d+$/
  return numberValidation.test(number)
}

export const isValidNumber = (number) => {
  const numberValidation = /^\d+$/
  return numberValidation.test(number)
}

export const isValidImageType = (imageType) => {
  const imageValidation = ['image/png', 'image/jpeg', 'image/jpg']
  return imageValidation.includes(imageType)
}

// Local storage

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken === null) {
      return undefined
    }
    return accessToken
  } catch (error) {
    return undefined
  }
}

export const setAccessToken = ({ access_token, refresh_token }) => {
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
}

// Network

export const createFormDataObj = (payload) => {
  const formData = new FormData()
  for (let key in payload) {
    formData.append(key, payload[key])
  }
  return formData
}

export const declOfNum = (number, titles) => {
  number = Math.abs(number)
  if (Number.isInteger(number)) {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }
  return titles[1]
}

export const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

export const formatterNumber = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  currency: 'RUB',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

export const getStartrekTimer = () => {
  try {
    const timer = localStorage.getItem('s')
    if (timer === null) {
      return null
    } else if (timer) {
      const diff = dayjs(timer).diff(dayjs().format(), 's')
      if (diff <= 1) {
        localStorage.removeItem('s')
        return null
      }
    }
    return timer
  } catch (error) {
    return null
  }
}

export const randomBetween = (min, max) => {
  const minCeil = Math.ceil(min)
  const maxFloor = Math.floor(max)
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil
}

export const resizeFreeInformationImage = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1366,
      768,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri)
      },
      'base64',
    )
  })
