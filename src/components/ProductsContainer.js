import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchProducts, toggleProductVisibility} from '../actions';
import Products from './Products';

const mapStateToProps = (state, ownProps) => ({
  productsAreLoading: state.productsAreLoading,
  productsHaveErrored: state.productsHaveErrored,
  productsResponse: state.productsResponse,
  categoriesResponse: state.categoriesResponse,
  productSearchInput: state.productSearchInput,
  category: ownProps.category
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProducts,
    toggleProductVisibility
  }, dispatch);
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;