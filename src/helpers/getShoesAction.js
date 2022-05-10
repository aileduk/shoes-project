import { setCardsAction, setCategoriesAction, setLoadingAction } from "../redux/app/actions";
import { getShoesRequest } from "../api/index";
import { store } from '../redux/store/index';
import isEqual from 'lodash.isequal';

export const getShoesAction = () => {
  return dispatch => {
    dispatch(setLoadingAction(true))
    getShoesRequest().then((items) => {
      const cards = store.getState().appReducer.cards
      if (!isEqual(cards, items)) {
        dispatch(setCardsAction(items))
      }
      dispatch(setCategoriesAction(items.reduce((acc, cur) => {
        return !acc.includes(cur.category) && cur.category.length ? [...acc, cur.category] : acc
      }, [])))

      dispatch(setLoadingAction(false))
    });
  }
}