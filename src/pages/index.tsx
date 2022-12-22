import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { GLOBALSTYLE } from '../global/GlobalStyle';
import { Layout } from '../components/layout/Layout';
import { Home } from '../components/home/Home';
import { AboutMe } from '../components/about_me/AboutMe';
import { Work } from '../components/work/Work';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GLOBALSTYLE />
      <Layout>
        <Home />
        <Work />
        <AboutMe />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
