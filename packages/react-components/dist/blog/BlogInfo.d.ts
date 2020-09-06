import React from "react";
/**
 * Interface for BlogInfo props
 */
interface BlogInfoProps {
    children?: any;
    date: number | string;
    author: string;
}
/**
 *  A BlogInfo component.
 */
declare const BlogInfo: React.FC<BlogInfoProps>;
export default BlogInfo;
