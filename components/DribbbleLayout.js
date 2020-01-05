import Head from "next/head";
import DribbbleFooter from "./DribbbleFooter";

const Layout = props => (
  <div>
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
      <title>@victorkernes</title>
    </Head>
    {props.children}
    <DribbbleFooter />
    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      html {
        font-family: "Ideal Sans A", "Ideal Sans B", -apple-system,
          BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue,
          sans-serif;
        text-size-adjust: 100%;
        text-rendering: optimizeLegibility;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
      }
      body {
        background-color: #f4f4f4;
        color: #9a9a9a;
      }
    `}</style>
  </div>
);

export default Layout;
