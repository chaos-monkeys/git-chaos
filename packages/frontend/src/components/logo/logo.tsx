import React from 'react';
import { Link } from 'gatsby';
import * as styles from './logo.module.scss';
import { upperCaseAndBreak } from '../../utils/textFormatter';
import classBuilder from '../../utils/classBuilder';

interface BuildLogoProps {
  boxStyle: string;
  headingStyle: string;
  text: any[];
}

const BuildLogo = ({ boxStyle, headingStyle, text }: BuildLogoProps) => (
  <div className={styles.wrapper}>
    <div className={classBuilder(styles.box, boxStyle)} />
    <h1 className={classBuilder(styles.heading, headingStyle)}>{text}</h1>
  </div>
);

interface LogoProps {
  linkStyle?: string;
  boxStyle?: string;
  headingStyle?: string;
  title: string;
  isLink?: boolean;
}

const Logo = ({
  linkStyle = '',
  headingStyle = '',
  boxStyle = '',
  title,
  isLink = false,
}: LogoProps) => {
  const text = upperCaseAndBreak(title);

  switch (true) {
    case isLink:
      return (
        <Link
          className={classBuilder(styles.link, linkStyle)}
          to="/"
        >
          {BuildLogo({
            boxStyle,
            headingStyle,
            text,
          })}
        </Link>
      );
    default:
      return BuildLogo({
        boxStyle,
        headingStyle,
        text,
      });
  }
};

export default Logo;
