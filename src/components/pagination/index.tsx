import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

type PaginationProps = {
  pageCount: number;
  onChange: any;
};

const Pagination: FC<PaginationProps> = ({ onChange, pageCount }) => {
  return (
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
};

export default Pagination;
