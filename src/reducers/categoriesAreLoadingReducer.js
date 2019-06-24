import {FETCH_CATEGORIES_REQUEST} from '../actions';

const categoriesAreLoading = (state = false, action) => {
  if(action && action.type === FETCH_CATEGORIES_REQUEST) {
    return action.categoriesAreLoading;
  }
  return state;
}

export default categoriesAreLoading;