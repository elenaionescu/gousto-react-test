import React from 'react';

import CategoriesContainer from './CategoriesContainer';
import ProductSearchInputContainer from './ProductSearchInputContainer';
import ProductsContainer from './ProductsContainer';

import '../styles/index.css';

function App({match: {params}}) {
  return (
    <div className="container">
      <CategoriesContainer selectedCategory={params.category} />
      <ProductSearchInputContainer />
      <ProductsContainer category={params.category} />
    </div>
  );
}

export default App;