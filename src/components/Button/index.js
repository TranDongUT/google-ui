import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Button({ to = false, href = false, icon, children, ...props }) {
  const classes = cx("wrapper", {
    to,
    href,
    ...props,
  });

  let Comp = "button";
  if (href) {
    Comp = "a";
    props.href = href;
  } else if (to) {
    Comp = Link;
    props.to = to;
  }

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
