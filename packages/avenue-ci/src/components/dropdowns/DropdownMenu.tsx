import React, { useState } from 'react';
import Button from 'Components/buttons/Button';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const Wrapper = styled.div`

`

interface IDropdownMenuProps {
  label: string,
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void 
}

/**
 * Defines a dropdown menu, which is activated by pressing the button
 */
const DropdownMenu: React.FunctionComponent<IDropdownMenuProps> = ({ label }) => {
  
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <Button label={label} onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => setActive(!active)} />
      <Dropdown active={active} />
    </Wrapper>
  );
};

export default DropdownMenu;
