import React from 'react';
import styled from 'styled-components';

import Colors from 'Constants/Colors';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Lato', serif;
  height: 60px;
  background-color: ${Colors.White};
  box-shadow: 1px 2px 7px 0px rgba(0,0,0,0.22);
  font-weight: bold;
  color: ${Colors.LightGray};
  font-size: 1.2em;
  padding: 0 20px;
  width: 100%;
`;

export interface Props {
  heading?: string,
  style?: object,
}

/**
 * Navigation Bar
 */
const NavBar: React.FC<Props> = ({ heading, style, children }) => {
  return (
  <Nav style={style}>{heading}{children}</Nav>
  );
};

export default NavBar;
