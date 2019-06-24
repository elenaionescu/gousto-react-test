import {FETCH_PRODUCTS_REQUEST} from '../actions';

const productsAreLoading = (state = false, action) => {
  if(action && action.type === FETCH_PRODUCTS_REQUEST) {
    return action.productsAreLoading;
  }
  return state;
}

export default productsAreLoading;