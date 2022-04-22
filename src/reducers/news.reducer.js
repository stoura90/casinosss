import * as ActionTypes from '../constants/news.constants'

const initialState = {
  list: [],
  block: null,
  query: {
    limit: 4,
    offset: 0,
  },
  meta: {
    total: 0,
    page: 0,
  },
  isLoading: false,
  isError: null,
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.NEWS_LIST_REQUEST: {
      return {
        ...state,
        query: { ...state.query, offset: 0 },
        meta: { ...state.meta, page: 0 },
        isLoading: true,
        isError: null,
      }
    }
    case ActionTypes.NEWS_LIST_SUCCESS: {
      const { newsList, newsBlock } = action.payload
      const { count, items } = newsList
      return {
        ...state,
        list: items,
        block: newsBlock,
        meta: { ...state.meta, total: Number(count) },
        isLoading: false,
        isError: null,
      }
    }
    case ActionTypes.NEWS_LIST_ERROR: {
      return { ...state, isLoading: false, isError: action.payload }
    }

    case ActionTypes.SET_NEWS_LIST_PAGE: {
      const { page } = action.payload
      return {
        ...state,
        query: { ...state.query, offset: state.query.limit * page },
        meta: { ...state.meta, page },
        isLoading: true,
        isError: null,
      }
    }

    default:
      return state
  }
}

export default newsReducer
