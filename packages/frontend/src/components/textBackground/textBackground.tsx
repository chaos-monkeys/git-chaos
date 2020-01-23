import React from 'react';
import * as styles from './textBackground.module.scss';
import classBuilder from '../../utils/classBuilder';

const TextBackground = ({ className}:
  {
    className: string,
    text: string,
  }) => (
    <>
      <div className={classBuilder(styles.grid, className)}>
        <div className={styles.grunge} />
        <div className={styles.textBackground} />
        <div className={styles.vignette} />
      </div>
    </>
);

export default TextBackground;
