/** @jsx jsx */
import { Blog } from "@robbie-cook/react-components";
import { BlogProps } from "@robbie-cook/react-components/dist/blog/Blog";
import marked from "marked";
import { getAllPosts, getPostBySlug } from "../../lib/PostHelper";
import React from "react";
import { jsx, css } from "@emotion/react";
import removeMd from "remove-markdown";

/**
 * Interface for Blog props
 */
export interface BlogPageProps {
  children?: any;
  posts?: BlogProps;
}

/**
 *  A Blog component.
 */
const BlogPage: React.FC<BlogProps> = (props) => {
  console.log(props.posts);
  return (
    <div
      css={css`
        padding: 60px 20%;
      `}
    >
      <Blog posts={props.posts} />
    </div>
  );
};

export function getStaticProps(context: any) {
  const posts = getAllPosts(["slug", "content", "author", "date", "title"]);
  return {
    props: {
      posts: posts.reduce(
        (acc, curr) => [
          ...acc,
          {
            ...curr,
            date: curr.date?.toString() ?? null,
            content: `${removeMd(curr.content).split(' ').slice(0, 60).join(' ')}...`,
            link: `/blog/posts/${curr.slug}`,
            author: {
              name: curr.author
            }
          },
        ],
        []
      ),
    },
  };
}

export default BlogPage;
