import Header from "../Header";
import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}></div>
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
