/** @jsx jsx */
import { jsx } from 'theme-ui'
// import styled from "styled-components";
// import Colors from "Constants/Colors";

// const StyledButton = styled.button`
//   border: 1px solid ${Colors.Purple};
//   font-size: 0.78rem;
//   padding: 10px 20px;
//   color: ${Colors.Purple};
//   transition: all 0.2s;

//   &:hover {
//     cursor: pointer;
//     background-color: ${Colors.Purple};
//     color: ${Colors.White};
//   }
//   &:active {
//     transform: scale(1.1);
//   }
// `;

interface IButtonProps {
  children: string,
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
}

/**
 * A normal button component
 */
const Button: React.FunctionComponent<IButtonProps> = ({ children, onClick }) => {
  return <button sx={{ variant: `buttons.toggle`}} onClick={onClick}>{children}</button>;
};

export default Button;
