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

// TODO: add more flexibilty int he future by making these independently styleable by parent
const BuildLogo = ({ boxStyle, headingStyle, text }: BuildLogoProps) => (
  <div className={styles.wrapper}>
    <div className={classBuilder(styles.box, boxStyle)} />
    <h1 className={classBuilder(styles.logo, headingStyle)}>{text}</h1>
  </div>
);


interface LogoProps {
  linkStyle: string;
  boxStyle: string;
  headingStyle: string;
  title: string;
  isLink?: boolean;
}

const Logo = ({
  linkStyle, headingStyle, boxStyle, title, isLink,
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

// FIXME: does this do anything?
Logo.defaultProps = {
  linkStyle: '',
  boxStyle: '',
  headingStyle: '',
  isLink: false,
} as Partial<LogoProps>;

export default Logo;
