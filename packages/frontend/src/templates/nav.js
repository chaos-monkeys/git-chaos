import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Logo from "../components/logo"
import "./nav.module.scss"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <Logo title={title} />
    </nav>
  )
}

export default Nav
