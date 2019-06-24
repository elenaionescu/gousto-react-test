import React from 'react';

import ProductDescription from './ProductDescription';

function Product(props) {
  return (
    <li className={`product ${props.descriptionVisible ? 'selected' : ''}`} onClick={() => props.toggleProductVisibility(props.productId)}>
      {props.title}
      <ProductDescription descriptionVisible={props.descriptionVisible} description={props.description} />
    </li>
  );
}

export default Product;