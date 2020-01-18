import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Logo from '../../components/logo/logo';
import Hamburger from '../../components/hamburger/hamburger';
import Sidebar from '../../components/sidebar/sidebar';
import Overlay from '../../components/overlay/overlay';
import * as styles from './nav.module.scss';

const uuidv1 = require('uuid/v1');

const ANIMATION_DELAY = 300;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  const [open, setOpen] = useState(false);
  const [isAnimating, setAnimating] = useState(false);

  // when the sidebar opening or closing set is animating to true
  // isAnimating is used inside the components to stop the component receiving further events
  useEffect(() => {
    setAnimating(true);

    const timer = setTimeout(() => {
      setAnimating(false);
    }, ANIMATION_DELAY);

    return () => clearTimeout(timer);
  }, [open, setOpen]);

  return (
    <>
      <Logo title={title} linkStyle={styles.logoLink} isLink />

      <nav>
        <Hamburger open={open} setOpen={setOpen} isAnimating={isAnimating} />
      </nav>

      <Sidebar
        sidebarStyle={styles.sidebar}
        title={title}
        open={open}
      />

      <Overlay open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
