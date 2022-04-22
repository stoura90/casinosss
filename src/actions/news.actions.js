import * as ActionTypes from '../constants/news.constants'

/* News List */
export const newsList = () => ({ type: ActionTypes.NEWS_LIST_REQUEST })
export const newsListSuccess = (newsList, newsBlock) => ({
  type: ActionTypes.NEWS_LIST_SUCCESS,
  payload: { newsList, newsBlock },
})
export const newsListError = (error) => ({
  type: ActionTypes.NEWS_LIST_ERROR,
  payload: error,
})

export const setNewsListPage = (page) => ({
  type: ActionTypes.SET_NEWS_LIST_PAGE,
  payload: { page },
})
