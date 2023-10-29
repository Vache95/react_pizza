import ReactPaginate from 'react-paginate';
import { IPaginationProps } from './types';
import styles from './pagination.module.scss';

const Pagination: React.FC<IPaginationProps> = ({ onChange, pageCount }) => (
	<ReactPaginate className={styles.root} breakLabel='...' nextLabel='>' onPageChange={e => onChange(e.selected + 1)} pageRangeDisplayed={4} pageCount={3} forcePage={pageCount - 1} previousLabel='<' />
);

export default Pagination;
