import React from "react"
import PropTypes from "prop-types"

import upperCaseAndSplit from "../utils/textFormatter"

const Header = ({ title }) => (
  <header>
    <h1>{upperCaseAndSplit(title)}</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
