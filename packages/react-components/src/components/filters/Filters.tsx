/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Pill from "../Tag";
import { Filters as FiltersInterface } from '../../types';

/**
 * Interface for Filters props
 */
export interface FiltersProps {
  filters: FiltersInterface;
}

/**
 *  A Filters component.
 */
const Filters: React.FC<FiltersProps> = (props) => {
  return (
    <React.Fragment>
      {props.filters.map((filter) => (
        <Pill
          key={filter.text}
          onClick={filter.onClick}
          active={filter.active ?? false}
        >
          {filter.text}
        </Pill>
      ))}
    </React.Fragment>
  );
};

export default Filters;
