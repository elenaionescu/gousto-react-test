import {FETCH_CATEGORIES_SUCCESS, SELECT_CATEGORY} from '../actions';

const categoriesResponse = (state = [], action) => {
  if (action && action.type === FETCH_CATEGORIES_SUCCESS) {
    return action.categoriesResponse.map(category => ({
      id: category.id,
      title: category.title
    }));
  }
  return state;
};

export default categoriesResponse;