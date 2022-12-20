import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { GLOBALSTYLE } from '../global/GlobalStyle';
import { Portfolio } from '../components/layout/Portfolio';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GLOBALSTYLE />
      <Portfolio />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
