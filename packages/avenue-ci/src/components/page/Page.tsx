import React from "react";
import styled from "styled-components";

import NavBar from "Components/navigation/NavBar";
import Sidebar from "Components/sidebar/Sidebar";
import Button from "Components/buttons/Button";
import Dropdown from "Components/dropdowns/Dropdown";
import DropdownMenu from "Components/dropdowns/DropdownMenu";

export interface Props {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
`;

const EndSection = styled.div`
  display: flex;
`;

/**
 * Navigation Bar
 */
const Page: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Sidebar />
      <NavBar style={{ justifyContent: "flex-end" }}>
        <Button
          label="Sign up"
          onClick={(
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void => {
            console.log("pressed!");
          }}
          style={{ marginRight: '20px' }}
        />
        <DropdownMenu
          label="Log in"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
            console.log("button pressed!")
          }
        ></DropdownMenu>
      </NavBar>
    </Wrapper>
  );
};

export default Page;
