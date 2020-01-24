import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Logo from '../../components/logo/logo';
import Hamburger from '../../components/hamburger/hamburger';
import Sidebar from '../../components/sidebar/sidebar';
import Overlay from '../../components/overlay/overlay';
import * as styles from './nav.module.scss';

const ANIMATION_DELAY = 300;

const Nav = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        sidebar {
          url
          name
        }
      }
    }
  }
  `);

  const { title, sidebar: links } = data.site.siteMetadata;


  // when the sidebar is opening or closing set is animating to true
  const [isAnimating, setAnimating] = useState(false);

  // isAnimating is used inside the components to stop the component receiving further events
  useEffect(() => {
    setAnimating(true);

    const timer = setTimeout(() => {
      setAnimating(false);
    }, ANIMATION_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Logo title={title} linkStyle={styles.link} isLink />

      <nav>
        <Hamburger isAnimating={isAnimating} />
      </nav>

      <Sidebar
        sidebarStyle={styles.sidebar}
        title={title}
        links={links}
      />

      <Overlay />
    </>
  );
};

export default Nav;
