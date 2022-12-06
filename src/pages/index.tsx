import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { GLOBALSTYLE } from '../global/GlobalStyle';
import { Portfolio } from '../components/Portfolio';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={GLOBALSTYLE}>
      <Portfolio />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
