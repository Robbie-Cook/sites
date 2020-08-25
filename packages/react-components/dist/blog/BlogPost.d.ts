/** @jsx jsx */
import React from "react";
/**
 * Interface for Blog props
 */
export interface BlogProps {
    children?: any;
    title: string;
    date: number;
    author: string;
    content: string;
}
/**
 *  A Blog component.
 */
declare const BlogPost: React.FC<BlogProps>;
export default BlogPost;
