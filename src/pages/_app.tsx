import { AppProps } from 'next/app';
import Head from 'next/head';
import AppProvider from '@/components/AppProvider';
import '@/styles/globals.scss';

// Next.js injects this value from package.json in next.config.js
const appname = process.env.NMXP_APP_NAME || '';

/**
 * Custom App Wrapper - [Documentation](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)
 */

export default function CustomApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bookmarks</title>
      </Head>
      <AppProvider appname={appname}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};
