import '../public/fonts/font.css';
import 'react-toastify/dist/ReactToastify.css';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import MainDrawer from '../src/components/common/MainDrawer';

type Page<P = Record<string, never>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props = AppProps<{ dehydratedState: unknown }> & {
  Component: Page<{ dehydratedState: unknown }>;
};

function App({ Component, pageProps }: Props) {
  const queryClient = new QueryClient();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-1 flex-col text-main-1 font-montserrat min-h-screen bg-white tablet:px-10">
          <Head>
            <title>Fashion Cloud</title>
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </div>
        <MainDrawer />
      </QueryClientProvider>
    </>
  );
}

export default App;
