import * as ActionTypes from '../constants/casino.constants'

const initialState = {
  draw: null,
  prizes: [],
  active: {
    list: [],
    current: null,
    query: {
      name: '',
      limit: 8,
      offset: 0,
      withEnded: false,
      withCanceled: false,
    },
    meta: {
      total: 0,
      page: 0,
    },
  },
  ended: {
    list: [],
    query: {
      limit: 9,
      offset: 0,
      isMy: false,
    },
    meta: {
      total: 0,
      page: 0,
    },
  },
  modals: {
    create: false,
    buy: false,
  },
  loadings: {
    create: false,
    cancel: false,
    prizes: false,
    active: false,
    ended: false,
    draw: false,
    buy: false,
  },
  errors: {
    create: null,
    cancel: null,
    prizes: null,
    active: null,
    ended: null,
    draw: false,
    buy: null,
  },
}

const casinoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CASINO_DRAW_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, draw: true },
        errors: { ...state.errors, draw: null },
      }
    }
    case ActionTypes.CASINO_DRAW_SUCCESS: {
      return {
        ...state,
        draw: payload,
        loadings: { ...state.loadings, draw: false },
        errors: { ...state.errors, draw: null },
      }
    }
    case ActionTypes.CASINO_DRAW_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, draw: false },
        errors: { ...state.errors, draw: payload },
      }
    }

    case ActionTypes.CASINO_DRAW_CREATE_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, create: true },
        errors: { ...state.errors, create: null },
      }
    }
    case ActionTypes.CASINO_DRAW_CREATE_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, create: false },
        errors: { ...state.errors, create: null },
      }
    }
    case ActionTypes.CASINO_DRAW_CREATE_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, create: false },
        errors: { ...state.errors, create: payload },
      }
    }

    case ActionTypes.CASINO_DRAW_CANCEL_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, cancel: true },
        errors: { ...state.errors, cancel: null },
      }
    }
    case ActionTypes.CASINO_DRAW_CANCEL_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, cancel: false },
        errors: { ...state.errors, cancel: null },
      }
    }
    case ActionTypes.CASINO_DRAW_CANCEL_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, cancel: false },
        errors: { ...state.errors, cancel: payload },
      }
    }

    case ActionTypes.CASINO_DRAW_BUY_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, buy: true },
        errors: { ...state.errors, buy: null },
      }
    }
    case ActionTypes.CASINO_DRAW_BUY_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, buy: false },
        errors: { ...state.errors, buy: null },
      }
    }
    case ActionTypes.CASINO_DRAW_BUY_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, buy: false },
        errors: { ...state.errors, buy: payload },
      }
    }

    case ActionTypes.CASINO_ACTIVE_LIST_REQUEST: {
      return {
        ...state,
        active: {
          ...state.active,
          meta: { ...state.active.meta, page: 0 },
          query: { ...state.active.query, offset: 0, name: '' },
        },
        loadings: { ...state.loadings, active: true },
        errors: { ...state.errors, active: null },
      }
    }
    case ActionTypes.CASINO_ACTIVE_LIST_SUCCESS: {
      const { count, items } = payload
      return {
        ...state,
        active: {
          ...state.active,
          meta: { ...state.active.meta, total: Number(count) },
          list: items,
        },
        loadings: { ...state.loadings, active: false },
        errors: { ...state.errors, active: null },
      }
    }
    case ActionTypes.CASINO_ACTIVE_LIST_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, active: false },
        errors: { ...state.errors, active: payload },
      }
    }
    case ActionTypes.SET_CASINO_ACTIVE_LIST_PAGE: {
      const { page } = payload
      return {
        ...state,
        active: {
          ...state.active,
          meta: { ...state.active.meta, page },
          query: {
            ...state.active.query,
            offset: state.active.query.limit * page,
          },
        },
        loadings: { ...state.loadings, active: true },
        errors: { ...state.errors, active: null },
      }
    }
    case ActionTypes.SET_CASINO_ACTIVE_LIST_SEARCH: {
      const { search } = payload
      return {
        ...state,
        active: {
          ...state.active,
          meta: { ...state.active.meta, page: 0 },
          query: { ...state.active.query, offset: 0, name: search },
        },
        loadings: { ...state.loadings, active: true },
        errors: { ...state.errors, active: null },
      }
    }
    case ActionTypes.SET_CASINO_ACTIVE_CURRENT_DRAW: {
      return { ...state, active: { ...state.active, current: payload } }
    }

    case ActionTypes.CASINO_ENDED_LIST_REQUEST: {
      return {
        ...state,
        ended: {
          ...state.ended,
          meta: { ...state.ended.meta, page: 0 },
          query: { ...state.ended.query, offset: 0, name: '' },
        },
        loadings: { ...state.loadings, ended: true },
        errors: { ...state.errors, ended: null },
      }
    }
    case ActionTypes.CASINO_ENDED_LIST_SUCCESS: {
      const { count, items } = payload
      return {
        ...state,
        ended: {
          ...state.ended,
          meta: { ...state.ended.meta, total: Number(count) },
          list: items,
        },
        loadings: { ...state.loadings, ended: false },
        errors: { ...state.errors, ended: null },
      }
    }
    case ActionTypes.CASINO_ENDED_LIST_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, ended: false },
        errors: { ...state.errors, ended: payload },
      }
    }
    case ActionTypes.SET_CASINO_ENDED_LIST_PAGE: {
      const { page } = payload
      return {
        ...state,
        ended: {
          ...state.ended,
          meta: { ...state.ended.meta, page },
          query: {
            ...state.ended.query,
            offset: state.ended.query.limit * page,
          },
        },
        loadings: { ...state.loadings, ended: true },
        errors: { ...state.errors, ended: null },
      }
    }
    case ActionTypes.SET_CASINO_ENDED_IS_MY: {
      return {
        ...state,
        ended: {
          ...state.ended,
          query: { ...state.ended.query, isMy: payload },
        },
        loadings: { ...state.loadings, ended: true },
        errors: { ...state.errors, ended: null },
      }
    }

    case ActionTypes.CASINO_DRAW_PRIZES_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, prizes: true },
        errors: { ...state.errors, prizes: null },
      }
    }
    case ActionTypes.CASINO_DRAW_PRIZES_SUCCESS: {
      return {
        ...state,
        prizes: payload,
        loadings: { ...state.loadings, prizes: false },
        errors: { ...state.errors, prizes: null },
      }
    }
    case ActionTypes.CASINO_DRAW_PRIZES_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, prizes: false },
        errors: { ...state.errors, prizes: payload },
      }
    }

    case ActionTypes.TOGGLE_CASINO_DRAW_CREATE_MODAL: {
      const newValue = payload ? payload : !state.modals.create

      return { ...state, modals: { ...state.modals, create: newValue } }
    }
    case ActionTypes.TOGGLE_CASINO_DRAW_BUY_MODAL: {
      const newValue = payload ? payload : !state.modals.buy

      return {
        ...state,
        modals: { ...state.modals, buy: newValue },
        active: {
          ...state.active,
          current: !newValue ? null : state.active.current,
        },
      }
    }

    default:
      return state
  }
}

export default casinoReducer
