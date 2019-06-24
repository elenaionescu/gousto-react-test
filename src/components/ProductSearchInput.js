import React from 'react';

function ProductSearchInput(props) {
  const handleUpdateProductSearchInput = (event) => props.updateProductSearchInputValue(event.target.value);

  return (<input value={props.productSearchInput} onChange={handleUpdateProductSearchInput} />);
}

export default ProductSearchInput;