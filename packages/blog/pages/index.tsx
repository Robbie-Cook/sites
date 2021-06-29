/** @jsxImportSource @emotion/react */
import { Blog } from "@robbie-cook/react-components";
import { getAllPosts, getPostBySlug } from "../lib/PostHelper";
import React from "react";
import { jsx, css } from "@emotion/react";
import removeMd from "remove-markdown";
import { NextSeo } from "next-seo";

/**
 * Interface for Blog props
 */
export interface BlogPageProps {
  children?: any;
  posts?: any;
}

/**
 *  A Blog component.
 */
const BlogPage: React.FC<any> = (props) => {
  return (
    <div
      css={css`
        @media screen and (min-width: 700px) {
          padding: 60px 20%;
        }
        padding: 20px 0px;
      `}
    >
      <NextSeo
        title="Robbie's Blog"
        description="Robbie's blog on web development, eact, and more!"
      />
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
          // @ts-ignore
          ...acc,
          {
            ...curr,
            date: curr.date?.toString() ?? null,
            content: `${removeMd(curr.content)
              .split(" ")
              .slice(0, 60)
              .join(" ")
              ?.replace(/&nbsp;/g, "")}...`,
            link: `/posts/${curr.slug}`,
            author: {
              name: curr.author,
            },
          },
        ],
        []
      ),
    },
  };
}

export default BlogPage;
