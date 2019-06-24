import axios from 'axios';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const TOGGLE_PRODUCT_VISIBILITY = 'TOGGLE_PRODUCT_VISIBILITY';
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const UPDATE_PRODUCT_SEARCH_INPUT_VALUE = 'UPDATE_PRODUCT_SEARCH_INPUT_VALUE';

export const fetchCategoriesRequest = (categoriesAreLoading) => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
    categoriesAreLoading
  };
}

export const fetchCategoriesError = (categoriesHaveErrored) => {
  return {
    type: FETCH_CATEGORIES_ERROR,
    categoriesHaveErrored
  };
}

export const fetchCategoriesSuccess = (categoriesResponse) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categoriesResponse
  };
};

export const fetchProductsRequest = (productsAreLoading) => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
    productsAreLoading
  };
};

export const fetchProductsError = (productsHaveErrored) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    productsHaveErrored
  };
}

export const fetchProductsSuccess = (productsResponse) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    productsResponse
  }
}

export const toggleProductVisibility = (id) => {
  return {
    type: TOGGLE_PRODUCT_VISIBILITY,
    id
  }
}

export const updateProductSearchInputValue = (productSearchInputValue) => {
  return {
    type: UPDATE_PRODUCT_SEARCH_INPUT_VALUE,
    productSearchInputValue
  }
}

export const fetchCategories = () => {
  return function(dispatch) {
    dispatch(fetchCategoriesRequest(true));

    axios.get('https://api.gousto.co.uk/products/v2.0/categories')
      .then(json => {
        dispatch(fetchCategoriesSuccess(json.data.data));
        dispatch(fetchCategoriesRequest(false));
      })
      .catch(err => {
        dispatch(fetchCategoriesError(err.message));
        dispatch(fetchCategoriesRequest(false));
      });
  }
}

export const fetchProducts = () => {
  return function(dispatch) {
    dispatch(fetchProductsRequest(true));

    axios.get('https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120')
      .then(json => {
        dispatch(fetchProductsSuccess(json.data.data));
        dispatch(fetchProductsRequest(false));
      })
      .catch(err => {
        dispatch(fetchProductsError(err.message));
        dispatch(fetchProductsRequest(false));
      });
  }
}