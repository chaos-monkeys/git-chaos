import React from 'react';
import * as styles from './hamburger.module.scss';

// FIXME: SOMEHOW require stops a path error with typescript and svg (and all non-code assets?)
const OpenIcon = require('../../images/icons/open.inline.svg');
const CloseIcon = require('../../images/icons/closed.inline.svg');

const openSidebar = (isAnimating: boolean, setOpen: Function, open: boolean) => (
  !isAnimating ? setOpen(!open) : () => { }
);

const hamburgerIcon = (open: boolean) => (open ? (
  <OpenIcon className={styles.icon} />
) : (
  <CloseIcon className={styles.icon} />
));

interface HamburgerProps {
  open: boolean,
  setOpen: Function,
  isAnimating: boolean,
}

const Hamburger = ({ open, setOpen, isAnimating }: HamburgerProps) => (
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
