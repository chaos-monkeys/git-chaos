import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Nav from "../templates/nav";
import Route from "../wip/route";

const Git = () => (
  <Layout>
    <Nav />
    <h1>Git</h1>
    <Router>
      <Route path="git/:sha" />
    </Router>
  </Layout>
);

export default Git;
