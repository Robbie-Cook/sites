/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import {
  Blog,
  Theme,
  ReactComponentsContext,
  H1,
  SEO,
} from "@robbie-cook/react-components";
import { graphql, useStaticQuery } from "gatsby";
import ArrowLeft from "./ArrowLeft";
import facepaint from "facepaint";
import date from "date-and-time";

// Manually import react-components styles
import "@robbie-cook/react-components/src/styles.scss";

import "./styles.scss";

/**
 * Interface for Blog props
 */
interface BlogProps {
  children?: any;
  data?: any;
}

type Props = {
  site: {
    siteMetadata: {
      [key: string]: string;
    };
  };
};

const mq = facepaint(["@media(min-width: 700px)", "@media(min-width: 1120px)"]);

/**
 *  A Blog component.
 */
const MyBlog: React.FC<BlogProps> = (props) => {
  const posts: Array<{
    title: string;
    date: string;
    content: any;
    author: string;
    link: string;
  }> = [];
  props.data?.allMarkdownRemark?.edges?.forEach((edge) => {
    if (edge.node.frontmatter.publish) {
      posts.push({
        title: edge.node.frontmatter.title,
        date: edge.node.frontmatter.date,
        content: (
          <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
        ),
        author: edge.node.frontmatter.author,
        link: `/blog/posts${edge.node.fields.slug}`,
      });
    }
  });

  let filters = [];
  props.data?.allMarkdownRemark?.edges?.forEach((edge) => {
    if (edge.node.frontmatter.tags) {
      for (const tag of edge.node.frontmatter.tags) {
        filters.push(tag);
      }
    }
  });
  filters = Array.from(new Set(filters));

  posts.sort((a, b) => {
    const date1 = new Date(a.date).getTime();
    const date2 = new Date(b.date).getTime();

    if (date1 === date2) {
      return 0;
    }
    return date1 > date2 ? -1 : 1;
  });

  return (
    <div
      css={css(
        mq({
          padding: ["30px 20px", "30px 150px"],
        })
      )}
    >
      <SEO site={props.data.site.siteMetadata as any} />

      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          /* margin-top: 75px; */
        `}
      >
        {/* <ArrowLeft link="/" /> */}
        {/* <H1
            css={css`
              font-size: 4rem;
              text-align: center;
              margin-bottom: 90px !important;
              margin-top: 0 !important;
              margin-right: auto !important;
              margin-left: auto !important;

              transform: translate(-30px, 0);
            `}
          >
            Blog
          </H1> */}
      </div>
      <h1>Blog</h1>
      <Blog posts={posts} filters={filters} />
    </div>
  );
};

export const pageQuery = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
          context {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
        siteTitleAlt
        siteHeadline
        siteUrl
        siteDescription
        siteLanguage
        siteImage
        author
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          id
          html
          headings(depth: h1) {
            id
          }
          fileAbsolutePath
          rawMarkdownBody
          tableOfContents
          timeToRead
          frontmatter {
            title
            author
            date
            publish
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default MyBlog;
