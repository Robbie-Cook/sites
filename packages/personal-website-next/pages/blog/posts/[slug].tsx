/** @jsx jsx */
import { BlogPost } from "@robbie-cook/react-components";
import { getAllPosts, getPostBySlug } from "../../../lib/PostHelper";
import marked from "marked";
import css from "@emotion/css";
import { jsx } from "@emotion/react";

const Post: React.FC<{
  title: string;
  date?: any;
  author?: any;
  content: any;
}> = (props) => {
  return (
    <div
      css={css`
        padding: 50px 100px;

        @media only screen and (max-width: 700px) {
          padding-left: 50px;
          padding-right: 50px;
        }
      `}
    >
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
