import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

const fetcher = (url: string) => fetch(url).then((response) => response.json());

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <>
            <Head>
                {/**
                 * @descripstion Viewport set in app, not document.
                 * @see https://nextjs.org/docs/messages/no-document-viewport-meta
                 */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/**
                 * @description Not indexing on non production env
                 */}
                <meta name="robots" content="noindex, nofollow" />
                <title>Ashley Redman - Compare your Air</title>
            </Head>
            <SWRConfig
                value={{
                    fetcher,
                    fallback: pageProps.fallback,
                    errorRetryCount: 3
                }}
            >
                <Component {...pageProps} />
            </SWRConfig>
        </>
    );
};

export default App;
