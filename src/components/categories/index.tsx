import { dataCategories } from 'utils/constants';
import { ICategoriesProps } from './types';

const Categories: React.FC<ICategoriesProps> = ({ value, onClickCategory }) => (
	<div className='categories'>
		<ul>
			{dataCategories?.map((categoryName, i) => (
				<li className={value === i ? 'active' : ''} onClick={() => onClickCategory(i)} key={i}>
					{categoryName}
				</li>
			))}
		</ul>
	</div>
);

export default Categories;
