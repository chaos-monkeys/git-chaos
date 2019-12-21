import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TextBackground from "../components/textBackground"

import styles from "./introduction.module.scss"

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          background
        }
      }
    }
  `)

  const { description, background } = data.site.siteMetadata
  const backgroundText = `${background} `.repeat(5)

  return (
    <div className={styles.grid}>
      <h2 className={styles.description}>{description}</h2>
      <TextBackground className={styles.textBackground} text={backgroundText} />
    </div>
  )
}

export default Introduction
