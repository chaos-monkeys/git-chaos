import React from 'react';
import * as styles from './hamburger.module.scss';
import { useAppState, useAppDispatch } from '../../context/appContext'
import toggleSidebar from '../../utils/toggleSidebar'

// NOTE: SOMEHOW require stops a path error with typescript and svg (and all non-code assets?)
const OpenIcon = require('../../images/icons/open.inline.svg');
const CloseIcon = require('../../images/icons/closed.inline.svg');


const hamburgerIcon = (open: boolean) => (open ? (
  <OpenIcon className={styles.icon} />
) : (
  <CloseIcon className={styles.icon} />
  ));


const Hamburger = ({ isAnimating }: { isAnimating: boolean }) => {
  const dispatch = useAppDispatch();
  const { sidebar } = useAppState()

  return (
    <button
      type="button"
      aria-label="Menu"
      data-open={sidebar.open}
      aria-expanded={sidebar.open}
      className={styles.hamburger}
      onClick={() => toggleSidebar({
        isAnimating,
        isOpen: sidebar.open,
        dispatch
      })}
    >
      {hamburgerIcon(sidebar.open)}
    </button>
  )
};

export default Hamburger;
