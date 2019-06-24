import {FETCH_PRODUCTS_ERROR} from '../actions';

const productsHaveErrored = (state = '', action) => {
  if(action && action.type === FETCH_PRODUCTS_ERROR) {
    return action.productsHaveErrored;
  }
  return state;
}

export default productsHaveErrored;