import { Html, Head, Main, NextScript } from "next/document";
import { App_NAME } from "../config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,400&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Nunito+Sans:opsz,wght@6..12,200;6..12,400&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
