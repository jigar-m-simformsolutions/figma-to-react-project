import classNames from "classnames";

const Typography = ({ variant, className, children }) => {
  const typographyClasses = classNames(
    {
      "text-lg font-semibold": variant === "h1",
      "text-base font-medium": variant === "h2",
      "text-base": variant === "body",
    },
    className // Allow users to pass custom class names
  );

  return <p className={typographyClasses}>{children}</p>;
};

export default Typography;
