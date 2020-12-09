/** @jsxImportSource @emotion/core */
import { BaseStyles } from "theme-ui";
import React from "react";
import "bigiron.css/dist/bigiron.css";
// import "../css/bigiron-overrides.css";

/**
 * Interface for CVPage props
 */
export interface CVPageProps {
  children?: any;
}

/**
 *  A CVPage component.
 */
const CVPage: React.FC<CVPageProps> = (props) => {
  return (
    // BaseStyles -- forcibly pull stylesheet from theme-ui
    <BaseStyles>
      <h1>CVPage</h1>
    </BaseStyles>
  );
};

export default CVPage;
