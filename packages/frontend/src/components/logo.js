import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styles from "./logo.module.scss";
import upperCaseAndSplit from "../utils/textFormatter";

const Logo = ({ title }) => (
  <Link href="/" to="/" className={styles.logo}>
    <h1>{upperCaseAndSplit(title)}</h1>
  </Link>
);

Logo.propTypes = {
  title: PropTypes.string,
};

Logo.defaultProps = {
  title: ``,
};

export default Logo;
