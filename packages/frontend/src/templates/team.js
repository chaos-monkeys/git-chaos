import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { AuthorImage, AuthorBio } from '../wip/author';

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      rob: file(relativePath: { eq: "rob.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ollie: file(relativePath: { eq: "ollie.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { rob, ollie } = data;


  return (
    <div>
      <h1>heu</h1>
      <AuthorBio name="Rob" description="lorem" />
      <AuthorImage fluid={rob.childImageSharp.fluid} />
    </div>
  );
};

export default Team;
