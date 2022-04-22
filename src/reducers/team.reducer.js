import * as ActionTypes from '../constants/team.constants'

const initialState = {
  list: [],
  query: {
    userName: '',
    limit: 8,
    offset: 0,
    user_id: null,
  },
  meta: {
    total: 0,
    page: 0,
  },
  isLoading: false,
  isError: null,
}

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_STRUCTURE_REQUEST: {
      return {
        ...state,
        query: {
          ...state.query,
          offset: 0,
          userName: '',
          user_id: action.payload,
        },
        meta: { ...state.meta, page: 0 },
        isLoading: true,
        isError: null,
      }
    }
    case ActionTypes.USER_STRUCTURE_SUCCESS: {
      const { count, items } = action.payload
      return {
        ...state,
        list: items,
        meta: { ...state.meta, total: Number(count) },
        isLoading: false,
        isError: null,
      }
    }
    case ActionTypes.USER_STRUCTURE_ERROR: {
      return { ...state, isLoading: false, isError: action.payload }
    }

    case ActionTypes.SET_USER_STRUCTURE_PAGE: {
      const { page } = action.payload
      return {
        ...state,
        query: { ...state.query, offset: state.query.limit * page },
        meta: { ...state.meta, page },
        isLoading: true,
        isError: null,
      }
    }

    case ActionTypes.SET_USER_STRUCTURE_SEARCH: {
      const { search } = action.payload
      return {
        ...state,
        query: { ...state.query, offset: 0, userName: search },
        meta: { ...state.meta, page: 0 },
        isLoading: true,
        isError: null,
      }
    }

    default:
      return state
  }
}

export default teamReducer
