/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React from "react";

/**
 * An image to sit on the hero page
 */
export function HeroImage({ src }: { src: string }) {
  return (
    <Flex
      sx={{
        display: ['none', 'none', 'none', 'flex', 'flex', 'flex'],
        height: "100%",
        marginRight: "50px",
        flex: "0 0 400px",
        minWidth: "300px",
      }}
    >
      <img src={src} alt="me" sx={{ width: "100%" }} />
    </Flex>
  );
}
