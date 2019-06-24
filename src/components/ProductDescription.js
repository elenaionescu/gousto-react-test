import React from 'react';

function ProductDescription(props) {
  return (props.descriptionVisible) ? (<p>{props.description}</p>) : null;
}

export default ProductDescription