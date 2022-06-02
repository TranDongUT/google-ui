import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Button({
  //type
  to = false,
  href = false,
  //size
  primary,
  circle,
  ///other
  className,
  icon,
  children,
  ...props
}) {
  const classes = cx("wrapper", {
    [className]: className,
    to,
    href,
    primary,
    circle,
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
      {icon && <span className={cx("icon")}>{icon}</span>}
      {children}
    </Comp>
  );
}

export default Button;
