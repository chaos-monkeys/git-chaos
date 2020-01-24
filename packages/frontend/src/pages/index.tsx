import React from 'react';
import SEO from '../components/seo/seo';
import Layout from '../components/layout';
import Introduction from '../templates/introduction/introduction';
import Team from '../templates/team/team';

import * as styles from './index.module.scss'

import Nav from '../templates/nav/nav';

import { AppProvider } from '../context/appContext'

const Index = () => (
  <Layout>
    <AppProvider>
      <SEO title="Home" />
      <Nav />

      <div className={styles.grid}>
        <Introduction />
        <Team className={styles.team} />
      </div>
    </AppProvider>
  </Layout>
);

export default Index;
