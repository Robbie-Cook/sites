import * as React from "react";
import styled from "styled-components";
import Colors from "Constants/Colors";

const StyledButton = styled.button`
  border: 1px solid ${Colors.Purple};
  font-size: 0.78rem;
  padding: 10px 20px;
  color: ${Colors.Purple};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.Purple};
    color: ${Colors.White};
  }
  &:active {
    transform: scale(1.1);
  }
`;

interface IButtonProps {
  label: string,
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
  style?: object,
}

/**
 * A normal button component
 */
const Button: React.FunctionComponent<IButtonProps> = ({ label, onClick, style }) => {
  return <StyledButton style={style} onClick={onClick}>{label}</StyledButton>;
};

export default Button;
