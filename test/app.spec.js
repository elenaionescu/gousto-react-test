import {expect} from 'chai';

import {
  categoriesResponse,
  productsResponse,
  categoriesAreLoading,
  categoriesHaveErrored,
  productsAreLoading,
  productsHaveErrored,
  productSearchInput
} from '../src/reducers';

import {
  fetchCategoriesSuccess,
  fetchProductsSuccess,
  toggleProductVisibility,
  fetchCategoriesRequest,
  fetchCategoriesError,
  fetchProductsRequest,
  fetchProductsError,
  updateProductSearchInputValue
} from '../src/actions';

import {
  mockCategoryData,
  mockCategoryState,
  mockProductData,
  mockProductState,
  mockUpdatedProducts,
  mockFilteredProductStateByCategory,
  mockFilteredProductStateByInputValue
} from './mocks';

import {
  filterProductsBySelection
} from '../src/helpers';

describe('environment', function() {
  it('should run a test', function() {
    expect(true).to.equal(true);
  });
});

describe('categoriesReducer', function() {
  it('should return initial state when called with no arguments', function() {
    const categories = categoriesResponse();
    expect(Array.isArray(categories));
    expect(categories.length).to.equal(0);
  });

  it('should update categoriesAreLoading state when passed categoriesAreLoading action', function() {
    expect(categoriesAreLoading(false, fetchCategoriesRequest(true))).to.equal(true);
    expect(categoriesAreLoading(true, fetchCategoriesRequest(false))).to.equal(false);
  });

  it('should update categoriesHaveErrored state when passed categoriesHaveErrored action', function() {
    expect(categoriesHaveErrored(false, fetchCategoriesError(true))).to.equal(true);
    expect(categoriesHaveErrored(true, fetchCategoriesError(false))).to.equal(false);
  });

  it('should map id and title states to each received category', function() {
    expect(categoriesResponse([], fetchCategoriesSuccess(mockCategoryData))).to.eql(mockCategoryState);
  });

  it('should return the current state when passed an invalid or undefined action', function() {
    expect(categoriesResponse(mockCategoryState)).to.equal(mockCategoryState);
  });
});

describe('productsReducer', function() {
  it('should return initial state when called with no arguments', function() {
    const products = productsResponse();
    expect(Array.isArray(products)).to.equal(true);
    expect(products.length).to.equal(0);
  });

  it('should update productsAreLoading state when passed productsAreLoading action', function() {
    expect(productsAreLoading(false, fetchProductsRequest(true))).to.equal(true);
    expect(productsAreLoading(true, fetchProductsRequest(false))).to.equal(false);
  });

  it('should update productsHaveErrored state when passed productsHaveErrored action', function() {
    expect(productsHaveErrored(false, fetchProductsError(true))).to.equal(true);
    expect(productsHaveErrored(true, fetchProductsError(false))).to.equal(false);
  });

  it('should map id, title and description to each received product', function() {
    expect(productsResponse([], fetchProductsSuccess(mockProductData))).to.eql(mockProductState);
  });

  it('should update the "descriptionVisible" property when a product is selected', function() {
    expect(productsResponse(mockProductState, toggleProductVisibility('00a0130e-bfea-11e7-a2c2-0617e74d8914'))).to.eql(mockUpdatedProducts);
  });
});

describe('productSearchInputFieldReducer', function() {
  it('should return initial state when called with no arguments', function() {
    expect(productSearchInput()).to.equal('');
  });

  it('should update the productSearchInputField state when passed updateProductSearchInputValue action', function() {
    expect(productSearchInput('', updateProductSearchInputValue('hello'))).to.equal('hello');
  });
});

describe('filterProductsBySelection', function() {
  it('should return all products if other arguments are falsy', function() {
    expect(filterProductsBySelection(mockProductState)).to.equal(mockProductState);
  });
  it('should return all products whose category lists contain id properties equal to the selected category', function() {
    expect(filterProductsBySelection(mockProductState, "Drinks Cabinet")).to.eql(mockFilteredProductStateByCategory);
  });
  it('should return all products whose titles contain the value in the productSearchInput', function() {
    expect(filterProductsBySelection(mockProductState, null, 'Borsa')).to.eql(mockFilteredProductStateByInputValue);
  });
  it('should return all products whose titles contain the value in the productSearchInput, even if a category is selected', function() {
    expect(filterProductsBySelection(mockProductState, "Drinks Cabinet", 'Borsa')).to.eql(mockFilteredProductStateByInputValue);
  });
});