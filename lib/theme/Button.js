export const Button = {
  baseStyle: {
    borderRadius: "100px",
    boxShadow: "none !important",
    color: "white",
    border: "none",
    height: "2rem",
    width: "10rem",
    textTransform: "capitalize",
    cursor: "pointer",
    m: "0.5rem"
  },
  size: {
    md: {
      height: "2.25rem",
      width: "auto",
    },
    lg: {
      height: "2.375rem",
      width: "auto",
    },
  },
  variants: {
    primary: {
      background: "-webkit-gradient(linear, right top, left top, from(#31d35c), to(#2ab6d9))",
      background: "linear-gradient(to right, #31d35c, #2ab6d9)",
      fontSize: "0.875rem",
      // border: "solid 1px #F9AA4A",
      opacity: "0.85",
    },
    secondary: {
      background: "white",
      opacity: "0.65",
      color: "black",
      fontSize: "0.875rem",
      border: "none",
    },
    whiteTab: {
      bg: "white",
      fontSize: "0.875rem",
      fontWeight: "400",
      color: "primaryRed",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};
