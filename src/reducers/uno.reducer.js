import * as ActionTypes from '../constants/stars.constants'

const DEFAULT_QUEUE_LINE = 0 // my clones

const initialState = {
  queue: {
    list: [],
    query: {
      limit: 9,
      offset: 0,
      line: DEFAULT_QUEUE_LINE,
      name: '',
    },
    meta: {
      total: 0,
      page: 0,
    },
  },
  loadings: {
    queue: false,
  },
  errors: {
    queue: null,
  },
}

const unoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MATRIX_QUEUE_REQUEST: {
      const { filter } = action.payload
      return {
        ...state,
        queue: {
          ...state.queue,
          meta: { ...state.queue.meta, page: 0, ...filter.meta },
          query: {
            ...state.queue.query,
            line: DEFAULT_QUEUE_LINE,
            offset: 0,
            name: '',
            ...filter.query,
          },
        },
        loadings: { ...state.loadings, queue: true },
        errors: { ...state.errors, queue: null },
      }
    }
    case ActionTypes.MATRIX_QUEUE_SUCCESS: {
      const { count, items } = action.payload

      return {
        ...state,
        queue: {
          ...state.queue,
          list: items,
          meta: { ...state.queue.meta, total: Number(count) },
        },
        loadings: { ...state.loadings, queue: false },
        errors: { ...state.errors, queue: null },
      }
    }
    case ActionTypes.MATRIX_QUEUE_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, queue: false },
        errors: { ...state.errors, queue: action.payload },
      }
    }

    case ActionTypes.SET_MATRIX_QUEUE_LINE: {
      const line = action.payload.line
      return {
        ...state,
        queue: {
          ...state.queue,
          meta: { ...state.queue.meta, page: 0 },
          query: { ...state.queue.query, offset: 0, name: '', line },
        },
        loadings: { ...state.loadings, queue: true },
        errors: { ...state.errors, queue: null },
      }
    }

    case ActionTypes.SET_MATRIX_QUEUE_SEARCH: {
      const name = action.payload.name
      return {
        ...state,
        queue: {
          ...state.queue,
          query: { ...state.queue.query, offset: 0, name },
          meta: { ...state.queue.meta, page: 0 },
        },
        isLoading: true,
        isError: null,
      }
    }

    case ActionTypes.SET_MATRIX_QUEUE_PAGE: {
      const page = action.payload.page
      return {
        ...state,
        queue: {
          ...state.queue,
          meta: { ...state.queue.meta, page },
          query: {
            ...state.queue.query,
            offset: state.queue.query.limit * page,
          },
        },
        loadings: { ...state.loadings, queue: true },
        errors: { ...state.errors, queue: null },
      }
    }

    default:
      return state
  }
}

export default unoReducer
