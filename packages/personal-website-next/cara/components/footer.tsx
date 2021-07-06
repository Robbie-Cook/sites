/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react";
import { Styled, Flex, useColorMode, jsx } from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    // setTheme(isDark ? `light` : `dark`)
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <div
      css={css`
        position: absolute;
        bottom: 0;
      `}
    >
      {/* <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3,
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`} Theme
      </button> */}
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      This website was proudly made with the excellent{" "}
      <a href="https://www.gatsbyjs.com/plugins/@lekoarts/gatsby-theme-cara/">
        Cara
      </a>{" "}
      theme by <a href="https://github.com/LekoArts">Lekoarts</a>. Thank you!
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      ></Flex>
    </div>
  );
};

export default Footer;
