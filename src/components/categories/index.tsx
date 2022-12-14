import { FC } from "react";
import "../../scss/components/_categories.scss";
import { dataCategories } from "./data";

type categoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const Categories: FC<categoriesProps> = ({ value, onClickCategory }) => (
  <div className="categories">
    <ul>
      {dataCategories.map((categoryName, i) => (
        <li className={value === i ? "active" : ""} onClick={() => onClickCategory(i)} key={i}>
          {categoryName}
        </li>
      ))}
    </ul>
  </div>
);

export default Categories;
