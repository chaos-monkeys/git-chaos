import React from "react";
import PropTypes from "prop-types";
import styles from "./hamburger.module.scss";

import OpenIcon from "../images/noun_banana_65208.svg";
import CloseIcon from "../images/noun_banana_65209.svg";

const openSidebar = ({ isAnimating, setOpen, open }) =>
  !isAnimating ? setOpen(!open) : () => {};

const hamburgerIcon = open =>
  open ? (
    <OpenIcon className={styles.icon} />
  ) : (
    <CloseIcon className={styles.icon} />
  );

const Hamburger = ({ open, setOpen, isAnimating }) => (
  <button
    type="button"
    aria-label="Menu"
    open={open}
    aria-expanded={open}
    onClick={() => openSidebar({ isAnimating, setOpen, open })}
    className={styles.hamburger}
  >
    {hamburgerIcon(open)}
  </button>
);

Hamburger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  isAnimating: PropTypes.bool,
};

Hamburger.defaultProps = {
  open: false,
  setOpen: () => {},
  isAnimating: false,
};

export default Hamburger;
