import { baseInstance } from './index'

export const getNewsList = (params) => baseInstance({ url: 'news/get', method: 'get', params })

export const getNewsId = (id) =>
  baseInstance({
    url: `news/get-one`,
    method: 'get',
    params: { news_id: id },
  })

export const getNewsBlock = () => baseInstance({ url: `news/get-block`, method: 'get' })
