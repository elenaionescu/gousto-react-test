import {combineReducers} from 'redux';

import categoriesResponse from './categoriesReducer';
import productsResponse from './productsReducer';
import categoriesAreLoading from './categoriesAreLoadingReducer';
import categoriesHaveErrored from './categoriesHaveErroredReducer';
import productsAreLoading from './productsAreLoadingReducer';
import productsHaveErrored from './productsHaveErroredReducer';
import productSearchInput from './productSearchInputReducer';

export {
  categoriesAreLoading,
  categoriesHaveErrored,
  categoriesResponse,
  productsResponse,
  productsAreLoading,
  productsHaveErrored,
  productSearchInput
}

const productSearchApp = combineReducers({
  categoriesAreLoading,
  categoriesHaveErrored,
  categoriesResponse,
  productsResponse,
  productsAreLoading,
  productsHaveErrored,
  productSearchInput
});

export default productSearchApp;