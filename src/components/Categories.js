import React, {Component} from 'react';

import Category from './Category';
import Error from './Error';
import Loading from './Loading';

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>
        <Loading loading={this.props.categoriesAreLoading} />
        <Error error={this.props.categoriesHaveErrored} />
        <ul>
          {this.props.categoriesResponse &&
            this.props.categoriesResponse.map(category =>
              <Category
                key={category.id}
                categoryId={category.id}
                title={category.title}
                selected={category.selected}
              />
            )
          }
        </ul>
      </div>
    );
  }
}

export default Categories;