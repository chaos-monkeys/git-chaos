import React from "react"
import PropTypes from "prop-types"
import styles from "./textBackground.module.scss"
import upperCaseAndSplit from "../utils/textFormatter"
import classBuilder from "../utils/classBuilder"

const TextBackground = ({ className, text }) => (
  <div className={classBuilder(styles.textBackground, className)}>
    {upperCaseAndSplit(text)}
  </div>
)

TextBackground.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

TextBackground.defaultProps = {
  text: ``,
  className: {},
}

export default TextBackground
