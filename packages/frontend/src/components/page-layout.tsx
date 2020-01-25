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

const PageTemplate = ({ data }: PageTemplateProps) => (
  <div>
    <h1>{data.mdx.frontmatter.title}</h1>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </div>
);


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

export default PageTemplate;
