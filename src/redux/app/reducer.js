import { SET_CARDS, SET_LOADING, SET_ACTIVE_SIZE, SET_CATEGORIES, SET_FILTER, SET_INPUT, SET_PAGE } from "./types";

const defaultState = {
  cards: [],
  categories: [],
  filter: null,
  input: '',
  loading: false,
  page: 1,
}

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload.map(card => ({
          ...card,
          activeSize: card.sizestock[0]?.size
        }))
      }
    case SET_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, ...action.payload]
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    case SET_INPUT:
      return {
        ...state,
        input: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case SET_ACTIVE_SIZE:
      const { name, size } = action.payload
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.name === name) {
            return {
              ...card,
              activeSize: size
            }
          } else {
            return card
          }
        })
      }
    default:
      return state
  }
}