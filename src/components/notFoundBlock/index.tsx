import { FC } from "react";
import styles from "./notFound.module.scss";

const NotFoundBlock: FC = () => {
  return (
    <h1 className={styles.root}>
      <span>:(</span>
      <br />
      notFound
    </h1>
  );
};

export default NotFoundBlock;
