function filterProductsBySelection(products, selectedCategory, inputValue) {
  if (inputValue) {
    return products.filter(product => product.title.indexOf(inputValue) > -1)
  }
  if (selectedCategory) {
    return products.filter(product => product.categories.some(category => category.title === selectedCategory))
  }
  return products;
}

export {
  filterProductsBySelection
}