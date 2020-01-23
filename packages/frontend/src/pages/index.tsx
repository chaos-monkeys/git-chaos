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
