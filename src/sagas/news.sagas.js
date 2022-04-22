import { takeEvery, call, put, all, select } from 'redux-saga/effects'

import * as ActionTypes from '../constants/news.constants'
import * as actions from '../actions/news.actions'
import * as api from '../api/news.api'

export function* newsList() {
  const { news } = yield select()
  try {
    const [newsList, newsBlock] = yield all([
      call(api.getNewsList, news.query),
      call(api.getNewsBlock),
    ])
    if (newsList && newsBlock) {
      yield put(actions.newsListSuccess(newsList, newsBlock))
    }
  } catch (error) {
    yield put(actions.newsListError(error))
  }
}

export default function* mainSaga() {
  yield all([
    takeEvery(ActionTypes.NEWS_LIST_REQUEST, newsList),
    takeEvery(ActionTypes.SET_NEWS_LIST_PAGE, newsList),
  ])
}
