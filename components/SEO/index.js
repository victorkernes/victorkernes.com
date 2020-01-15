import * as React from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const SeoConfig = {
  title: "Victor Kernes",
  description: "Product designer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://victorkernes.com",
    site_name: "Victor Kernes",
    images: [
      {
        // Update to my own image
        url: "https://brianlovin.com/static/og-image.jpeg",
        width: 1600,
        height: 400,
        alt: "Victor Kernes"
      }
    ]
  },
  twitter: {
    handle: "@victorkernes",
    site: "@victorkernes",
    cardType: "summary_large_image"
  }
};

export default function SEO() {
  return (
    <React.Fragment>
      <DefaultSeo {...SeoConfig} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6931734/6253212/css/fonts.css"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="../static/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../static/favicon/site.webmanifest" />
        <title>Victor Kernes – Product Designer</title>
      </Head>
    </React.Fragment>
  );
}
