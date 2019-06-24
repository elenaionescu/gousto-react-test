import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ProductSearchInput from './ProductSearchInput';
import {
  updateProductSearchInputValue
} from '../actions';

const mapStateToProps = (state) => ({
  productSearchInput: state.productSearchInput
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateProductSearchInputValue
  }, dispatch);
}

const ProductSearchInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSearchInput);

export default ProductSearchInputContainer;