// // FIXME: FIX THIS - juut to test husky
// /* eslint-disable react/prop-types */


// import React from 'react';
// import { Link, graphql } from 'gatsby';

// const BlogIndex = ({ data } : { data: { allMdx: { edges: [ { id: string, fields: { slug: string}, frontmatter: { title: string}}]}}}) => {
//   const { edges: posts } = data.allMdx;
//   return (
//     <div>
//       <h1>Awesome MDX Blog</h1>
//       <ul>
//         {posts.map(({ node: post } : { node: object}) => (
//           <li key={post.id}>
//             <Link to={post.fields.slug}>
//               <h2>{post.frontmatter.title}</h2>
//             </Link>
//             <p>{post.excerpt}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const pageQuery = graphql`
//   query blogIndex {
//     allMdx {
//       edges {
//         node {
//           id
//           excerpt
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
// export default BlogIndex;
