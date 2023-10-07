import React from 'react';

import Layout from '../../src/layouts/Layout';

function Blog() {
  return (
    <>
      <main className=''>

      </main>
    </>
  );
}

export default Blog;


Blog.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};