/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from "@emotion/styled";

const StyledButton = styled.button`
  font-size: 0.78rem;
  padding: 10px 20px;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(1.1);
  }
`;

interface IButtonProps {
  children: string,
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
}

/**
 * A normal button component
 */
const Button: React.FunctionComponent<IButtonProps> = ({ children, onClick }) => {
  return <StyledButton sx={{ variant: `buttons.toggle`, font: `fonts.body` }} onClick={onClick}>{children}</StyledButton>;
};

export default Button;
