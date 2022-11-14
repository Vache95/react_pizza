import React, { useState } from 'react';
import '../../scss/components/_categories.scss';
import { dataCategories } from './data';

const Categories = () => {
  const [active, setActive] = useState(0);

  return (
    <div class="categories">
      <ul>
        {dataCategories.map((e, i) => (
          <li className={i === active ? 'active' : ''} onClick={() => setActive(i)} key={i}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
