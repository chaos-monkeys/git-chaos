import React from 'react';
import { OverlayProps } from './props';

import * as styles from './overlay.module.scss';

const Overlay = ({ open, setOpen }: OverlayProps) => (
  // the close action only needs to fire when the user clicks off the sidebar
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div className={styles.overlay} data-open={open} onClick={() => setOpen(false)} />
);

export default Overlay;
