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
 *  A Blog component.
 */
declare const BlogPostShort: React.FC<BlogPostProps>;
export default BlogPostShort;
