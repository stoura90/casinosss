import * as ActionTypes from '../constants/starsup.constants'

const initialState = {
  info: null,
  users: [],
  package: null,
  bonuses: [],
  query: {
    limit: 8,
    offset: 0,
  },
  meta: {
    total: 0,
    page: 0,
  },
  loadings: {
    bonuses: null,
    users: false,
    info: false,
    buy: false,
  },
  errors: {
    bonuses: null,
    users: null,
    info: null,
    buy: null,
  },
  modals: {
    buyPackage: false,
    superBonus: false,
    buy: false,
  },
}

const starsupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.STARS_UP_INFO_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, info: true },
        errors: { ...state.errors, info: null },
      }
    }
    case ActionTypes.STARS_UP_INFO_SUCCESS: {
      return {
        ...state,
        info: action.payload,
        loadings: { ...state.loadings, info: false },
        errors: { ...state.errors, info: null },
      }
    }
    case ActionTypes.STARS_UP_INFO_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, info: false },
        errors: { ...state.errors, info: action.payload },
      }
    }

    case ActionTypes.STARS_UP_BUY_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, buy: true },
        errors: { ...state.errors, buy: null },
      }
    }
    case ActionTypes.STARS_UP_BUY_SUCCESS: {
      return {
        ...state,
        package: action.payload,
        modals: { ...state.modals, buy: false },
        loadings: { ...state.loadings, buy: false },
        errors: { ...state.errors, buy: null },
      }
    }
    case ActionTypes.STARS_UP_BUY_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, buy: false },
        errors: { ...state.errors, buy: action.payload },
      }
    }

    case ActionTypes.STARS_UP_USERS_REQUEST: {
      return {
        ...state,
        meta: { ...state.meta, page: 0 },
        query: { ...state.query, offset: 0 },
        loadings: { ...state.loadings, users: true },
        errors: { ...state.errors, users: null },
      }
    }
    case ActionTypes.STARS_UP_USERS_SUCCESS: {
      const { count, items } = action.payload
      return {
        ...state,
        users: items,
        meta: { ...state.meta, total: Number(count) },
        loadings: { ...state.loadings, users: false },
        errors: { ...state.errors, users: null },
      }
    }
    case ActionTypes.STARS_UP_USERS_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, users: false },
        errors: { ...state.errors, users: action.payload },
      }
    }

    case ActionTypes.SET_STARSUP_USERS_PAGE: {
      const page = action.payload.page
      return {
        ...state,
        meta: { ...state.meta, page },
        query: { ...state.query, offset: state.query.limit * page },
        loadings: { ...state.loadings, users: true },
        errors: { ...state.errors, users: null },
      }
    }

    case ActionTypes.TOGGLE_STARS_UP_PLACE_BUY_MODAL: {
      const newValue = action.payload ? action.payload : !state.modals.buy

      return { ...state, modals: { ...state.modals, buy: newValue } }
    }

    case ActionTypes.TOGGLE_STARS_UP_PACKAGE_BUY_SUCCESS_MODAL: {
      const newValue = action.payload ? action.payload : !state.modals.buyPackage

      return {
        ...state,
        package: !newValue ? null : state.package,
        modals: { ...state.modals, buyPackage: newValue },
      }
    }

    case ActionTypes.STARS_UP_SUPER_BONUS_REQUEST:
    case ActionTypes.STARS_UP_ACTIVE_SUPER_BONUS_REQUEST: {
      return {
        ...state,
        loadings: { ...state.loadings, bonuses: true },
        errors: { ...state.errors, bonuses: null },
      }
    }
    case ActionTypes.STARS_UP_SUPER_BONUS_SUCCESS: {
      return {
        ...state,
        bonuses: action.payload.items,
        loadings: { ...state.loadings, bonuses: false },
        errors: { ...state.errors, bonuses: null },
      }
    }
    case ActionTypes.STARS_UP_ACTIVE_SUPER_BONUS_SUCCESS: {
      return {
        ...state,
        loadings: { ...state.loadings, bonuses: false },
        errors: { ...state.errors, bonuses: null },
      }
    }
    case ActionTypes.STARS_UP_SUPER_BONUS_ERROR:
    case ActionTypes.STARS_UP_ACTIVE_SUPER_BONUS_ERROR: {
      return {
        ...state,
        loadings: { ...state.loadings, bonuses: false },
        errors: { ...state.errors, bonuses: action.payload },
      }
    }

    case ActionTypes.TOGGLE_STARS_UP_SUPER_BONUS_MODAL: {
      const newValue = action.payload ? action.payload : !state.modals.superBonus

      return { ...state, modals: { ...state.modals, superBonus: newValue } }
    }

    default:
      return state
  }
}

export default starsupReducer
