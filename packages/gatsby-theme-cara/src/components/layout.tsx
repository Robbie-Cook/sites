/** @jsx jsx */
import React from "react";
import { Global } from "@emotion/core";
import { css, Styled, jsx } from "theme-ui";
import SEO from "./seo";

type LayoutProps = { children?: React.ReactNode; className?: string };

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`,
        },
      })}
    />
    <SEO />
    <link
      href="https://fonts.googleapis.com/css2?family=Lexend+Peta&family=Vollkorn:ital,wght@0,600;0,700;0,800;0,900;1,700&display=swap"
      rel="stylesheet"
    ></link>
    <main className={className}>{children}</main>
  </Styled.root>
);

export default Layout;
