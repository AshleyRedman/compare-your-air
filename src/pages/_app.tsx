import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <>
            <Head>
                {/**
                 * @descripstion Viewport set in app, not head.
                 * @see https://nextjs.org/docs/messages/no-document-viewport-meta
                 */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/**
                 * @description Not indexing on non production env
                 */}
                <meta name="robots" content="noindex, nofollow" />
                <title>Compare your air</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
