import * as React from "react";
import styled from "styled-components";

import Colors from "Constants/Colors";
import NavBar from "Components/navigation/NavBar";

const StyledSidebar = styled.aside`
  width: 30vw;
  min-height: 100%;
  background-color: ${Colors.LightPurple};
`;

interface ISidebarProps {}

/**
 * A sidebar of the app
 */
const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  return (
    <StyledSidebar>
      <NavBar
        heading="AvenueCI"
        style={{ backgroundColor: Colors.Purple, color: Colors.White, boxShadow: 'none' }}
      ></NavBar>
    </StyledSidebar>
  );
};

export default Sidebar;
