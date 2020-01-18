import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Logo from "./logo";
import classBuilder from "../utils/classBuilder";

import styles from "./sidebar.module.scss";

// TODO: add as a graphql query!
const Sidebar = ({ className, title, open }) => (
  <aside className={classBuilder(className, styles.sidebar)} open={open}>
    <Logo className={classBuilder(styles.logo, styles.link)} title={title} />

    <ul>
      <li>
        <Link href="/" to="/">
          Meet the team
        </Link>
      </li>
      <li>
        <Link href="/" to="/">
          Posts
        </Link>
      </li>
      <li>
        <Link href="/" to="/">
          Git chaos
        </Link>
      </li>
    </ul>
  </aside>
);

Sidebar.propTypes = {
  open: PropTypes.bool,
  // TODO: check whether classname is actually a string or not...
  className: PropTypes.string,
  title: PropTypes.string,
};

Sidebar.defaultProps = {
  open: false,
  className: ``,
  title: ``,
};

export default Sidebar;
