import { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

const Document = (): ReactElement => (
    <Html lang="en">
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
            <link rel="manifest" href="site.webmanifest" />
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#7936ae" />
            <meta name="msapplication-TileColor" content="#7936ae" />
            <meta name="theme-color" content="#7936ae" />
        </Head>
        <body className="bg-gradient-to-r from-purple to-blue font-sans text-white-100 antialiased">
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
