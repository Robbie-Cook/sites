/** @jsxImportSource @emotion/react */
import { BlogPost } from "@robbie-cook/react-components";
import { getAllPosts, getPostBySlug } from "../../lib/PostHelper";
import marked from "marked";
import css from "@emotion/css";
import React from "react";
import { NextSeo } from "next-seo";

const Post: React.FC<{
  title: string;
  date?: number;
  author?: any;
  content: any;
  description: string;
}> = (props) => {
  return (
    <div
      css={css`
        @media only screen and (max-width: 700px) {
          padding-left: 25px;
          padding-right: 25px;
        }
      `}
    >
      <NextSeo
        title={props.title}
        description={props.description ?? `${props.title} - ${props.author}`}
      />
      {/* @ts-ignore */}
      <BlogPost
        {...props}
        content={
          <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
        }
      />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "content",
    "author",
    "date",
    "title",
    "description"
  ]);
  const content = marked(post.content || "");

  return {
    props: {
      ...post,
      content,
      date: post.date?.toString(),
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
