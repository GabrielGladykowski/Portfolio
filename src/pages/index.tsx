import * as React from 'react';
import { HeadFC } from 'gatsby';
import { GLOBALSTYLE } from '../global/GlobalStyle';
import { Layout } from '../components/layout/Layout';
import { Home } from '../components/home/Home';
import { AboutMe } from '../components/about_me/AboutMe';
import { Works } from '../components/work/Works';

const IndexPage = () => {
  return (
    <>
      <GLOBALSTYLE />
      <Layout>
        <Home />
        <Works />
        <AboutMe />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
