/** @jsx jsx */
import { BaseStyles } from "theme-ui";
import React from "react";
import "bigiron.css/dist/bigiron.css";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import useSiteMetadata from "../hooks/use-site-metadata";
import Intro from "./sections/intro.mdx";
import Experience from "./sections/experience.mdx";
import Education from "./sections/education.mdx";

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
  const metadata = useSiteMetadata();


  return (
    // BaseStyles -- forcibly pull stylesheet from theme-ui
    <BaseStyles>
      <GatsbySeo
        title="Robbie Cook - CV"
        description="Robbie Cook's CV"
      />
      <Intro />
      <Experience />
      <Education />
    </BaseStyles>
  );
};

export default CVPage;
