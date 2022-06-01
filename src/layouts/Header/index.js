import style from "./Header.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("link-action")}>
        <Button href={"https://mail.google.com/"}>Gmail</Button>
        <Button href={"https://mail.google.com/"}>Hình ảnh</Button>
      </div>
      <div className={cx("more-action")}>
        <div className={cx("more-btn")}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <img
          className={cx("avata")}
          src="https://lh3.googleusercontent.com/ogw/ADea4I7Rmg-3SGQzjJXrshmLYYDqPZ5LMHmQqxyxrseGVA=s32-c-mo"
          alt="avata"
        />
      </div>
    </div>
  );
}

export default Header;
