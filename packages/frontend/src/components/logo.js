import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './logo.module.scss';
import { upperCaseAndSplita } from '../utils/textFormatter';
import classBuilder from '../utils/classBuilder';

// TODO: add more flexibilty int he future by makinf these independantly styleable by parent
const BuildLogo = ({ boxStyle, headingStyle, title }) => (
  <div className={styles.wrapper}>
    <div className={classBuilder(styles.box, boxStyle)} />
    <h1 className={classBuilder(styles.logo, headingStyle)}>{title}</h1>
  </div>
);

BuildLogo.propTypes = {
  title: PropTypes.string,
  boxStyle: PropTypes.string,
  headingStyle: PropTypes.string,
};

BuildLogo.defaultProps = {
  title: '',
  boxStyle: '',
  headingStyle: '',
};

const Logo = ({ parentStyle, title: text, isLink }) => {
  const title = upperCaseAndSplita(text);

  switch (true) {
    case isLink:
      return (
        <Link
          className={classBuilder(styles.link, parentStyle.link)}
          href="/"
          to="/"
        >
          {BuildLogo({
            boxStyle: parentStyle.box,
            headingStyle: parentStyle.heading,
            title,
          })}
        </Link>
      );
    default:
      return BuildLogo({
        boxStyle: parentStyle.box,
        headingStyle: parentStyle.heading,
        title,
      });
  }
};

Logo.propTypes = {
  title: PropTypes.string,
  isLink: PropTypes.bool,
  className: PropTypes.string,
};

Logo.defaultProps = {
  title: '',
  isLink: false,
  className: '',
};

export default Logo;
