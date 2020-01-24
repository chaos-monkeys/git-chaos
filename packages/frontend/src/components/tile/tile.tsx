import React from 'react';
import * as styles from './tile.module.scss';
import classBuilder from '../../utils/classBuilder';

const Tile = ({ className}:
  {
    className: string,
    text: string,
  }) => (
    <>
      <div className={classBuilder(styles.grid, className)}>
        <div className={styles.grunge} />
        <div className={styles.tile} />
        <div className={styles.vignette} />
      </div>
    </>
);

export default Tile;
