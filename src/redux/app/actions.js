import { SET_ACTIVE_SIZE, SET_LOADING, SET_CARDS, SET_INPUT, SET_CATEGORIES, SET_FILTER, SET_PAGE } from "./types"

export const setActiveSizeAction = (name, size) => {
  return {
    type: SET_ACTIVE_SIZE,
    payload: {
      name,
      size
    }
  }
}

export const setCardsAction = (payload) => ({ type: SET_CARDS, payload });
export const setCategoriesAction = (payload) => ({ type: SET_CATEGORIES, payload });
export const setFilterAction = (payload) => ({ type: SET_FILTER, payload })
export const setInputAction = (payload) => ({ type: SET_INPUT, payload });
export const setLoadingAction = (payload) => ({ type: SET_LOADING, payload });
export const setPageAction = (payload) => ({ type: SET_PAGE, payload })
