import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Logo from "../components/logo";
import Hamburger from "../components/hamburger";
import Sidebar from "../components/sidebar";
import Overlay from "../components/overlay";
import styles from "./nav.module.scss";

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
      <nav className={styles.nav}>
        <Logo title={title} isLink />
      </nav>
      <nav className={styles.hamburger}>
        <Hamburger open={open} setOpen={setOpen} isAnimating={isAnimating} />
      </nav>
      <Sidebar className={styles.sidebar} title={title} open={open} />
      <Overlay open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
