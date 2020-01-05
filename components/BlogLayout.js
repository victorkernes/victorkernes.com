import Head from "next/head";
import BlogFooter from "./BlogFooter";

const BlogLayout = props => (
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
    <BlogFooter />
    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
          helvetica, helvetica neue, ubuntu, roboto, noto, segoe ui, arial,
          sans-serif;
      }
      body {
        background-color: rgb(255, 255, 255);
        color: #202123;
      }
    `}</style>
  </div>
);

export default BlogLayout;
