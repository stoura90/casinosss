import { baseInstance } from './index'

export const startrekStatistics = () => baseInstance({ url: 'star-trek/statistic', method: 'get' })

export const startrekStatistic = () => baseInstance({ url: 'star-trek/table', method: 'get' })

export const startrekBuy = () => baseInstance({ url: 'star-trek/buy', method: 'post' })

export const startrekPlanets = (params) =>
  baseInstance({ url: 'star-trek/list', method: 'get', params })

export const startrekPlanetsUpdate = (planets) =>
  baseInstance({
    url: 'star-trek/update',
    method: 'post',
    data: { planets },
  })
