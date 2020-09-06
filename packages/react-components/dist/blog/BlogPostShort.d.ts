import React from "react";
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
declare const BlogPostShort: React.FC<BlogPostProps>;
export default BlogPostShort;
