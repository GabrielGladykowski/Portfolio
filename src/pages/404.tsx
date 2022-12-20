import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Error404 } from '../components/error404/Error404';

const NotFoundPage: React.FC<PageProps> = () => {
  return <Error404 />;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
