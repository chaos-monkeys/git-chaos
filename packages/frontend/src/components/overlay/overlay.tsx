import React from 'react';
import { useAppState, useAppDispatch } from '../../context/appContext'
import toggleSidebar from '../../hooks/toggleSidebar'

import * as styles from './overlay.module.scss';

const Overlay = () => {
  const dispatch = useAppDispatch();
  const { sidebar } = useAppState()

  return (
    // the close action only needs to fire when the user clicks off the sidebar
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={styles.overlay}
      data-open={sidebar.open}
      onClick={() => toggleSidebar({ isAnimating: false, state: sidebar, dispatch })}
    />
  )
}

export default Overlay;
