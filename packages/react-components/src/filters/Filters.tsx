/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Pill from "../Pill";

/**
 * Interface for Filters props
 */
export interface FiltersProps {
  filters: Array<{
    text: string;
    onClick: () => void;
  }>;
}

/**
 *  A Filters component.
 */
const Filters: React.FC<FiltersProps> = (props) => {
  return (
    <React.Fragment>
      {props.filters.map((filter) => (
        <Pill onClick={filter.onClick}>{filter.text}</Pill>
      ))}
    </React.Fragment>
  );
};

export default Filters;
