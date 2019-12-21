import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Route from "../temp/route"

const Git = () => (
  <Layout>
    <h1>Git</h1>
    <Router>
      <Route path="git/:sha" />
    </Router>
  </Layout>
)

export default Git
