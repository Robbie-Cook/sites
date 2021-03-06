/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import BlogPostShort, { BlogPostProps } from "./BlogPostShort";
import Filters from "../filters/Filters";
import { Heading } from "../typography/Typography";
export interface BlogProps {
  posts: Array<Omit<BlogPostProps, "short">>;
  filters?: Array<string>;
}

/**
 * A function which determines whether a string is included in a
 * list of strings, regardless of casing.
 */
function listIncludesString(str: string, list: string[]) {
  for (const s of list) {
    if (s.toLowerCase() === str.toLowerCase()) {
      return true;
    }
  }
  return false;
}

/**
 *  A Blog component.
 */
const Blog: React.FC<BlogProps> = (props) => {
  const [filter, setFilter] = React.useState<string | null>(null);

  return (
    <div>
      <Heading level={1}>Blog</Heading>
      <Filters
        filters={[
          { text: "All", onClick: () => setFilter(null), active: !filter },
          ...(props.filters?.map((f) => ({
            text: f,
            onClick: () => {
              if (filter === f) {
                setFilter(null);
              } else {
                setFilter(f);
              }
            },
          })) ?? []),
        ]}
      />
      {props.posts
        .filter((post) => {
          // Filter posts by topic.
          if (filter) {
            if (!post.tags || !listIncludesString(filter, post.tags)) {
              return false;
            }
          }
          return true;
        })
        .map((post) => (
          <div
            key={post.date}
            css={css`
              margin: 50px 0;
            `}
          >
            <BlogPostShort {...post} />
          </div>
        ))}
    </div>
  );
};

export default Blog;
