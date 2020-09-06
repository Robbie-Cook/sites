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
    /**
     * Whether this is a shortened post or a long
     */
    short: boolean;
}
/**
 *  A BlogPost component.
 */
declare const BlogPost: React.FC<BlogPostProps>;
export default BlogPost;
