import React from "react";
/**
 * Interface for Blog props
 */
export interface BlogPostProps {
    children?: any;
    title: string;
    date: number;
    author: string;
    content: string | JSX.Element;
}
/**
 *  A BlogPost component.
 */
declare const BlogPost: React.FC<BlogPostProps>;
export default BlogPost;
