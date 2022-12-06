import React from 'react';
import '../../scss/components/_categories.scss';
import { dataCategories } from './data';

const Categories = ({value,onClickCategory}) => {
  

  return (
    <div className="categories">
      <ul>
        {dataCategories.map((categoryName, i) => (
          <li className={value === i ? 'active' : ''} onClick={() => onClickCategory(i)} key={i}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
