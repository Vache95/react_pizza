import { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

type PaginationProps = {
  pageCount: number;
  onChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ onChange, pageCount }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(e) => onChange(e.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={pageCount - 1}
    previousLabel="<"
  />
);

export default Pagination;
