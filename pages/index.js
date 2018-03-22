import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// function getPosts () {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js'},
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
//   ]
// }
//
// const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
//     <style jsx>{`
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }
//
//       a {
//         text-decoration: none;
//         color: #fff;
//         font-family: "Arial";
//       }
//
//       a:hover {
//         opacity: 0.6;
//       }
//       `}
//     </style>
//   </li>
// )


export default () => (
  <Layout>
    <h1>Victor Kernes</h1>
    <h2>UX Designer, San Francisco</h2>
    <style jsx global>{`
      * {
        text-align: center;
      }
      body {
        background-color: #394046;
        font-weight: 400;
      }
      h1 {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        color: #fff;
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 0.75px;
      }
      h2 {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        color: #818EA1;
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: -0.25px;
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        margin: 5xp 0;
      }
      a {
        text-decoration: none;
        color: #fff;
      }
      a:hover {
        opacity: 0.6;
      }
    `}
    </style>
  </Layout>
)

// const Index = (props) => (
//   <Layout>
//     <h1>Batman Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//       <li key={show.id}>
//         <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//           <a>{show.name}</a>
//         </Link>
//       </li>
//     ))}
//     </ul>
//   </Layout>
// )
//
// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//
//   console.log(`Show data fetched. Count: ${data.length}`)
//
//   return {
//     shows: data
//   }
// }
//
// export default Index
// const PostLink = (props) => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// export default () => (
//   <Layout>
//     <div>
//       <h1>Welcome to my blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" title="Hello Next.js"/>
//         <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
//         <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
//       </ul>
//     </div>
//   </Layout>
// );
