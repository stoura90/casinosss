import isEmpty from 'lodash'

import * as ActionTypes from '../constants/starsup.constants'

const DEFAULT_QUEUE_LINE = 0

const initialState = {
  levels: [],
  structure: {},
  clones: 0,
  level: 1,
  users: {
    list: [],
    install: null,
    query: {
      limit: 8,
      offset: 0,
    },
    meta: {
      total: 0,
      page: 0,
    },
  },
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
    installMatrix: false,
    installClones: false,
    structure: false,
    arrange: false,
    levels: false,
    users: false,
    queue: false,
  },
  errors: {
    installMatrix: null,
    installClones: null,
    structure: null,
    arrange: null,
    levels: null,
    users: null,
    queue: null,
  },
  modals: {
    arrange: false,
    users: false,
  },
}

const EMPTY_MATRIX_OBJ = {
  name: null,
  attributes: { avatar: null },
}

function upChildren(children) {
  return children.map((object, index) => {
    if (isEmpty(object)) {
      return { ...EMPTY_MATRIX_OBJ, place: index + 1 }
    } else {
      return {
        ...object,
        children: object.attributes.last ? [] : upChildren(object.children),
      }
    }
  })
}

const starsupTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.STARS_UP_LEVELS_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, levels: true },
        errors: { ...state.errors, levels: null },
      }
    }
    case ActionTypes.STARS_UP_LEVELS_SUCCESS: {
      return {
        ...state,
        levels: action.payload.items,
        loadings: { ...state.loadings, levels: false },
        errors: { ...state.errors, levels: null },
      }
    }
    case ActionTypes.STARS_UP_LEVELS_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, levels: false },
        errors: { ...state.errors, levels: action.payload },
      }
    }

    case ActionTypes.STARS_UP_STRUCTURE_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, structure: true },
        errors: { ...state.errors, structure: null },
      }
    }
    case ActionTypes.STARS_UP_STRUCTURE_SUCCESS: {
      const { matrix, count: clones, level } = action.payload
      const structure = { ...matrix, children: upChildren(matrix.children) }

      return {
        ...state,
        level,
        clones,
        structure,
        loadings: { ...state.loadings, structure: false },
        errors: { ...state.errors, structure: null },
      }
    }
    case ActionTypes.STARS_UP_STRUCTURE_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, structure: false },
        errors: { ...state.errors, structure: action.payload },
      }
    }

    case ActionTypes.STARS_UP_USERS_FOR_INSTALL_REQUEST: {
      return {
        ...state,
        users: {
          ...state.users,
          meta: { ...state.users.meta, page: 0 },
          query: { ...state.users.query, offset: 0 },
        },
        loadings: { ...state.loadings, users: true },
        errors: { ...state.errors, users: null },
      }
    }
    case ActionTypes.STARS_UP_USERS_FOR_INSTALL_SUCCESS: {
      const { count, items } = action.payload
      return {
        ...state,
        users: {
          ...state.users,
          list: items,
          meta: { ...state.users.meta, total: Number(count) },
        },
        loadings: { ...state.loadings, users: false },
        errors: { ...state.errors, users: null },
      }
    }
    case ActionTypes.STARS_UP_USERS_FOR_INSTALL_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, users: false },
        errors: { ...state.errors, users: action.payload },
      }
    }

    case ActionTypes.SET_STARSUP_USERS_FOR_INSTALL_PAGE: {
      const page = action.payload.page
      return {
        ...state,
        users: {
          ...state.users,
          meta: { ...state.users.meta, page },
          query: {
            ...state.users.query,
            offset: state.users.query.limit * page,
          },
        },
        loadings: { ...state.loadings, users: true },
        errors: { ...state.errors, users: null },
      }
    }

    case ActionTypes.TOGGLE_STARS_UP_USERS_FOR_INSTALL_MODAL: {
      const newValue = action.payload.visible ? action.payload.visible : !state.modals.users
      return {
        ...state,
        users: {
          ...state.users,
          install: newValue ? action.payload.installUser : null,
        },
        modals: { ...state.modals, users: newValue },
      }
    }

    case ActionTypes.STARS_UP_INSTALL_MATRIX_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, installMatrix: true },
        errors: { ...state.errors, installMatrix: null },
      }
    }
    case ActionTypes.STARS_UP_INSTALL_MATRIX_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, installMatrix: false },
        errors: { ...state.errors, installMatrix: null },
      }
    }
    case ActionTypes.STARS_UP_INSTALL_MATRIX_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, installMatrix: false },
        errors: { ...state.errors, installMatrix: action.payload },
      }
    }

    case ActionTypes.STARS_UP_INSTALL_CLONE_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, installClones: true },
        errors: { ...state.errors, installClones: null },
      }
    }
    case ActionTypes.STARS_UP_INSTALL_CLONE_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, installClones: false },
        errors: { ...state.errors, installClones: null },
      }
    }
    case ActionTypes.STARS_UP_INSTALL_CLONE_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, installClones: false },
        errors: { ...state.errors, installClones: action.payload },
      }
    }

    case ActionTypes.STARS_UP_QUEUE_REQUEST: {
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
    case ActionTypes.STARS_UP_QUEUE_SUCCESS: {
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
    case ActionTypes.STARS_UP_QUEUE_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, queue: false },
        errors: { ...state.errors, queue: action.payload },
      }
    }

    case ActionTypes.SET_STARS_UP_QUEUE_LINE: {
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

    case ActionTypes.SET_STARS_UP__QUEUE_SEARCH: {
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

    case ActionTypes.SET_STARS_UP_QUEUE_PAGE: {
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

    case ActionTypes.STARS_UP_ARRANGE_CLONES_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, arrange: true },
        errors: { ...state.errors, arrange: null },
      }
    }
    case ActionTypes.STARS_UP_ARRANGE_CLONES_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, arrange: false },
        errors: { ...state.errors, arrange: null },
      }
    }
    case ActionTypes.STARS_UP_ARRANGE_CLONES_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, arrange: false },
        errors: { ...state.errors, arrange: action.payload },
      }
    }

    case ActionTypes.TOGGLE_STARS_UP_ARRANGE_CLONES_MODAL: {
      const newValue = action.payload ? action.payload : !state.modals.arrange

      return { ...state, modals: { ...state.modals, arrange: newValue } }
    }

    default:
      return state
  }
}

export default starsupTableReducer
