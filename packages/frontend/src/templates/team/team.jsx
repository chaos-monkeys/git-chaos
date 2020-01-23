import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { AuthorImage, AuthorBio } from '../../wip/author';

import * as styles from './team.module.scss';

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
    <div className={styles.grid}>
      <h1 className={styles.pull}>
Built with
        {' '}
        <span role="img" aria-label="love">❤️</span>
        {' '}
by
      </h1>
      <div className={styles.left}>
        <AuthorImage fluid={rob.childImageSharp.fluid} className={styles.image} />
        <span className={styles.name}>Rob Balaban</span>
        <span className={styles.title}>Data wizard</span>
        <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis beatae inventore, enim quas dolorum corrupti excepturi repellat consequatur, cupiditate autem eius porro eaque, id saepe mollitia qui esse deserunt.</span>
      </div>

      <div className={styles.right}>
        <AuthorImage fluid={rob.childImageSharp.fluid} className={styles.image} />
        <span className={styles.name}>Rob Balaban</span>
        <span className={styles.title}>Data wizard</span>
        <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis beatae inventore, enim quas dolorum corrupti excepturi repellat consequatur, cupiditate autem eius porro eaque, id saepe mollitia qui esse deserunt.</span>
      </div>
    </div>

  );
};

export default Team;
