import * as ActionTypes from '../constants/startrek.constants'

/* Startrek Statistics */
export const startrekStatistics = () => ({
  type: ActionTypes.STARTREK_STATISTICS_REQUEST,
})
export const startrekStatisticsSuccess = (statistics) => ({
  type: ActionTypes.STARTREK_STATISTICS_SUCCESS,
  payload: statistics,
})
export const startrekStatisticsError = (error) => ({
  type: ActionTypes.STARTREK_STATISTICS_ERROR,
  payload: error,
})

/* Startrek Statistic */
export const startrekStatistic = () => ({
  type: ActionTypes.STARTREK_STATISTIC_REQUEST,
})
export const startrekStatisticSuccess = (statistics) => ({
  type: ActionTypes.STARTREK_STATISTIC_SUCCESS,
  payload: statistics,
})
export const startrekStatisticError = (error) => ({
  type: ActionTypes.STARTREK_STATISTIC_ERROR,
  payload: error,
})

/* Startrek Buy */
export const startrekBuy = () => ({ type: ActionTypes.STARTREK_BUY_REQUEST })
export const startrekBuySuccess = (timer) => ({
  type: ActionTypes.STARTREK_BUY_SUCCESS,
  payload: timer,
})
export const startrekBuyError = (error) => ({
  type: ActionTypes.STARTREK_BUY_ERROR,
  payload: error,
})

export const startrekResetTimer = () => ({
  type: ActionTypes.STARTREK_RESET_TIMER,
})

/* Startrek Planets */
export const startrekPlanets = () => ({
  type: ActionTypes.STARTREK_PLANETS_REQUEST,
})
export const startrekPlanetsSuccess = (planets) => ({
  type: ActionTypes.STARTREK_PLANETS_SUCCESS,
  payload: planets,
})
export const startrekPlanetsError = (error) => ({
  type: ActionTypes.STARTREK_PLANETS_ERROR,
  payload: error,
})

export const setStartrekPlanetsPage = (page) => ({
  type: ActionTypes.SET_STARTREK_PLANETS_PAGE,
  payload: page,
})

/* Startrek Update Planets */
export const startrekPlanetsUpdate = () => ({
  type: ActionTypes.STARTREK_PLANETS_UPDATE_REQUEST,
})
export const startrekPlanetsUpdateSuccess = () => ({
  type: ActionTypes.STARTREK_PLANETS_UPDATE_SUCCESS,
})
export const startrekPlanetsUpdateError = (error) => ({
  type: ActionTypes.STARTREK_PLANETS_UPDATE_ERROR,
  payload: error,
})

export const setPlanetForUpdate = (planetId) => ({
  type: ActionTypes.SET_PLANET_FOR_UPDATE,
  payload: planetId,
})

export const toggleAllPlanetOnPage = () => ({
  type: ActionTypes.TOGGLE_ALL_PLANET_ON_PAGE,
})
