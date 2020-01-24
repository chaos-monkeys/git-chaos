// FIXME: make this into a separate copmponnet?
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Tile from '../../components/tile/tile';
import * as styles from './introduction.module.scss';

const BIG_NUM = 40; // FIXME: make dynamic

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          background
        }
      }
      mdx(id: {eq: "72a13f9d-65bf-52a5-aea7-46b5e90867cd"}) {
        fields {
          slug
        }
        frontmatter {
          title
          author
        }
      }
    }
  `);


  const {background} = data.site.siteMetadata;
  const {title, author} = data.mdx.frontmatter
  const {slug} = data.mdx.fields;

  const backgroundText = `${background}\n`.repeat(BIG_NUM); // FIXME: gross!

  return (
    // TOOD: add text ally stuff and arias
    <Link to={slug} className={styles.tileLink}>
      <Tile className={styles.tile} text={backgroundText} />
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.author}>{`By ${author}`}</h3>
    </Link>
  );
};

export default Introduction;
