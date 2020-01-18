import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./logo.module.scss";
import { upperCaseAndSplita } from "../utils/textFormatter";

const Logo = ({ title, isLink }) => {
  switch (true) {
    case isLink:
      return (
        <Link className={styles.link} href="/" to="/">
          <div className={styles.box}>
            <h1 className={styles.logo}>{upperCaseAndSplita(title)}</h1>
          </div>
        </Link>
      );
    default:
      return <h1 className={styles.logo}>{upperCaseAndSplita(title)}</h1>;
  }
};

Logo.propTypes = {
  title: PropTypes.string,
  isLink: PropTypes.bool,
};

Logo.defaultProps = {
  title: ``,
  isLink: false,
};

export default Logo;
