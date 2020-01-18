import React from 'react';
import * as styles from './hamburger.module.scss';

import { HamburgerProps } from './props';

// FIXME: SOMEHOW not using modules stops a path error with typescript and svgs (and all non-code assets?)
const OpenIcon = require('../../images/noun_banana_65208.inline.svg');
const CloseIcon = require('../../images/noun_banana_65209.inline.svg');

const openSidebar = (isAnimating: boolean, setOpen: Function, open: boolean) => (
  !isAnimating ? setOpen(!open) : () => { }
);

const hamburgerIcon = (open: boolean) => (open ? (
  <OpenIcon className={styles.icon} />
) : (
  <CloseIcon className={styles.icon} />
));

const Hamburger = ({ open, setOpen, isAnimating } : HamburgerProps) => (
  <button
    type="button"
    aria-label="Menu"
    aria-expanded={open}
    onClick={() => openSidebar(isAnimating, setOpen, open)}
    className={styles.hamburger}
  >
    {hamburgerIcon(open)}
  </button>
);

export default Hamburger;
