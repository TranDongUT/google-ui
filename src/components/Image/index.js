//css
import style from "./Image.module.scss";
import classNames from "classnames";
//react
import { forwardRef, useState } from "react";
import images from "~/assets/images";

const Image = forwardRef(
  ({ src, alt, className, fallback: customFallback = images.noImage }, ref) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(customFallback);
    };
    return (
      <img
        className={classNames(style.wrapper, className)}
        src={fallback || src}
        alt={alt}
        ref={ref}
        onError={handleError}
      />
    );
  }
);

export default Image;
