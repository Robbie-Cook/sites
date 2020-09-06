import React from "react";
import { BlogPostProps } from "./BlogPostShort";
export interface BlogProps {
    posts: Array<Omit<BlogPostProps, "short">>;
}
/**
 *  A Blog component.
 */
declare const Blog: React.FC<BlogProps>;
export default Blog;
