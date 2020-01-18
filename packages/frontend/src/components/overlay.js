import React from "react";
import PropTypes from "prop-types";

import styles from "./overlay.module.scss";

const Overlay = ({ open, setOpen }) => (
  // the close action only needs to fire when the user clicks off the sidebar
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div className={styles.overlay} open={open} onClick={() => setOpen(false)} />
);

Overlay.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

Overlay.defaultProps = {
  open: false,
  setOpen: () => {},
};

export default Overlay;
