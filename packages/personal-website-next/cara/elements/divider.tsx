/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "theme-ui";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";

type DividerProps = {
  speed: number;
  offset: number;
  children?: React.ReactNode;
  bg?: string;
  fill?: string;
  clipPath?: string;
  className?: string;
  factor?: number;
  style?: React.CSSProperties;
};

const Divider = ({
  speed,
  offset,
  factor,
  bg,
  fill,
  clipPath,
  children,
  className,
  style,
}: DividerProps) => (
  <ParallaxLayer
    // @ts-ignore
    style={style}
    css={css({
      position: `absolute`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
    })}
    speed={speed}
    offset={offset}
    factor={factor || 1}
  >
    {children}
  </ParallaxLayer>
);

export default Divider;
