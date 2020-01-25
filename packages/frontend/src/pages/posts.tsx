import React from 'react';
import { Link, graphql } from 'gatsby';

interface PostsIndex {
  data: {
    allMdx: {
      edges: [{
        node: {
          id: string,
          fields: {
            slug: string
          },
          frontmatter: {
            title: string
          }
        }
      }]
    }
  }
}

const PostsIndex = ({ data }: PostsIndex) => {
  const { edges: posts } = data.allMdx;
  return (
    <div>
      <h1>Awesome MDX post</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const pageQuery = graphql`
  query postIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default PostsIndex;
