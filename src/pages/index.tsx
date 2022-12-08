import * as React from 'react';
import type { PageProps } from 'gatsby';
import { GLOBALSTYLE } from '../global/GlobalStyle';
import { Portfolio } from '../components/Portfolio';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GLOBALSTYLE />
      <Portfolio />
    </>
  );
};

export default IndexPage;
