import * as ActionTypes from '../constants/superstar.constants'

const initialState = {
  queue: {
    list: [],
    current: null,
    query: {
      name: '',
      limit: 8,
      offset: 0,
    },
    meta: {
      total: 0,
      page: 0,
    },
    isVisible: false,
    isLoading: false,
    isError: null,
  },
  modals: {
    installComets: false,
  },
}

const superStarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SUPER_STAR_QUEUE_REQUEST: {
      return {
        ...state,
        queue: { ...state.queue, isLoading: true, isError: null },
      }
    }

    case ActionTypes.GET_SUPER_STAR_QUEUE_SUCCESS: {
      const { count, items } = action.payload
      return {
        ...state,
        queue: {
          ...state.queue,
          list: items,
          meta: { ...state.queue.meta, total: Number(count) },
          isLoading: false,
          isError: null,
        },
      }
    }

    case ActionTypes.GET_SUPER_STAR_QUEUE_ERROR: {
      return {
        ...state,
        queue: { ...state.queue, isError: action.payload, isLoading: false },
      }
    }

    case ActionTypes.SET_SUPER_STAR_INSTALL_COMET: {
      return { ...state, queue: { ...state.queue, current: action.payload } }
    }

    case ActionTypes.SET_SUPER_STAR_QUEUE_PAGE: {
      const { page } = action.payload
      return {
        ...state,
        queue: {
          ...state.queue,
          query: {
            ...state.queue.query,
            offset: state.queue.query.limit * page,
          },
          meta: { ...state.queue.meta, page },
          isLoading: true,
          isError: null,
        },
      }
    }

    case ActionTypes.SET_SUPER_STAR_QUEUE_SEARCH: {
      const { search } = action.payload
      return {
        ...state,
        queue: {
          ...state.queue,
          query: { ...state.queue.query, offset: 0, name: search },
          meta: { ...state.queue.meta, page: 0 },
          isLoading: true,
          isError: null,
        },
      }
    }

    case ActionTypes.TOGGLE_SUPER_STAR_QUEUE_MODAL: {
      const newValue = action.payload ? action.payload : !state.queue.isVisible
      const resetQueryAndMeta = !newValue
        ? {
            query: { ...initialState.queue.query },
            meta: { ...initialState.queue.meta },
          }
        : {}

      return {
        ...state,
        queue: { ...state.queue, isVisible: newValue, ...resetQueryAndMeta },
      }
    }

    case ActionTypes.TOGGLE_SUPER_STAR_INSTALL_COMETS_MODAL: {
      const newValue = action.payload ? action.payload : !state.modals.installComets

      return {
        ...state,
        queue: {
          ...state.queue,
          current: newValue ? state.queue.current : null,
        },
        modals: { ...state.modals, installComets: newValue },
      }
    }

    default:
      return state
  }
}

export default superStarReducer
