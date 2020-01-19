import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TextBackground from '../../components/textBackground/textBackground';

import * as styles from './introduction.module.scss';

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          background
        }
      }
    }
  `);

  const { description, background } = data.site.siteMetadata;
  const backgroundText = `${background}\n`.repeat(5);

  return (
    <div className={styles.grid}>
      <div>
        <h2 className={styles.description}>{description}</h2>
        <TextBackground className={styles.textBackground} text={backgroundText} />
      </div>
      <div>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default Introduction;
