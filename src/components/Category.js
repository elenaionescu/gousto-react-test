import React from 'react';
import {NavLink} from 'react-router-dom';

function Category(props) {
  return (
    <NavLink
      to={`/${props.title}`}
      style={{textDecoration: 'none', color: '#444'}}
      activeStyle={{fontWeight: 'bold', textDecoration: 'underline'}}
      className='category'
    >
      {props.title}
    </NavLink>
  );
}

export default Category;