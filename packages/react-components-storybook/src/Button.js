/** @jsx jsx */
import { jsx } from "theme-ui";

/**
 * A normal button component
 */
const Button = ({
  children,
  onClick
}) => {
  return (
      <button
      sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
      >
        {children}
      </button>
  );
};

Button.defaultProps = {
  children: `My button`
};

export default Button;
