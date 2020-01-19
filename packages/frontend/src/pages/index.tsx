import React from 'react';

import SEO from '../components/seo/seo';
import Layout from '../components/layout';
import Introduction from '../templates/introduction/introduction';
import Team from '../templates/team/team';


import Nav from '../templates/nav/nav';

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Introduction />
    <Team />
  </Layout>
);

export default Index;

// import { useStaticQuery, graphql } from "gatsby"
// import Header from "../components/header"
// import TextBackground from "../components/textBackground"
// import Join from "../components/join"
// import { AuthorImage, AuthorBio } from "../components/author"
// const { rob, ollie } = data

/* TODO: fix the hell outta that */

/* {/* <Header title={title} /> */

/* <h1>{description}</h1> */

/* <div>
        <AuthorImage fluid={rob.childImageSha rp.fluid} />
        <AuthorBio name="Rob" description="lorem" />
      </div>
      <div>
        <AuthorBio name="Ollie" description="lorem" />
        <AuthorImage fluid={ollie.childImageSharp.fluid} />
      </div>
      <Join /> */
