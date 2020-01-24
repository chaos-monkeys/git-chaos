// FIXME: FIX THIS - juut to test husky
/* eslint-disable react/prop-types */


import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface PageTemplateProps {
  data: {
    mdx: {
      body: string,
      frontmatter: {
        title: string
      }
    }
  }
}

export default function PageTemplate({ data: { mdx } }: PageTemplateProps) {
  return (
    <div>
      <h1>asdsadsadsad</h1>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
