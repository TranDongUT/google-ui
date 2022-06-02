//css
import style from "./Header.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
//component
import Button from "~/components/Button";
import Image from "~/components/Image";

const cx = classNames.bind(style);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("link-action")}>
        <Button href={"https://mail.google.com/"}>Gmail</Button>
        <Button href={"https://mail.google.com/"}>Hình ảnh</Button>
      </div>
      <div className={cx("more-action")}>
        <Tippy content="Các ứng dụng của Google">
          <button className={cx("more-btn")}>
            {<FontAwesomeIcon icon={faBars} />}
          </button>
        </Tippy>
        <div className={cx("avata-block")}>
          <Image
            className={cx("avata")}
            src="https://lh3.googleusercontent.com/ogw/ADea4I7Rmg-3SGQzjJXrshmLYYDqPZ5LMHmQqxyxrseGVA=s32-c-mo"
            alt="avata"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
