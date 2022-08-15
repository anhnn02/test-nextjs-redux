import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../app/store'

import { SWRConfig } from "swr";
import instance from "@/api/instance";
import Layout from "@/components/Layouts";
import { AppPropsWithLayout } from "@/models/Layout";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return <Provider store={store}>
      <LayoutWrapper>
            <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
              <Head>
                  <title>Create Next App</title>
                  <meta name="description" content="Generated by create next app" />
                  <link rel="icon" href="/favicon.ico" />
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
              </Head>
                <Component {...pageProps} />
            </SWRConfig>
        </LayoutWrapper>
    </Provider>
}

export default MyApp