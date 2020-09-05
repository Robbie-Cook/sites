/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Blog, Theme, ReactComponentsContext } from "@robbie-cook/react-components";
import { ThemeProvider, useTheme } from "emotion-theming";


console.log("blog", Blog);
/**
 * Interface for Blog props
 */
interface BlogProps {
  children?: any;
}

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

/**
 *  A Blog component.
 */
const MyBlog: React.FC<BlogProps> = (props) => {
  return (
    <ReactComponentsContext.Provider value={{ test: "awesome" }}>
      <Blog
        posts={[
          {
            title: "My Blog Post",
            author: "Robbie Cook",
            content: "hello!",
            date: Date.now(),
          },
        ]}
      />
    </ReactComponentsContext.Provider>
    // <div></div>
  );
};

export default MyBlog;
