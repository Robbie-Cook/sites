/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"

/**
 * Interface for Blog props
 */
interface BlogProps {
  children?: any;
};

/**
 *  A Blog component.
 */
const Blog: React.FC<BlogProps> = (props) => {
  return <div css={css``}>Blog component</div>
}

export default Blog;