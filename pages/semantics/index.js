import * as React from "react";
import { getPosts } from "../../api/ghost";

const Semantics = props => (
<ul>
  {props.posts.map(post => (
    <li key={post.id}>{post.title}</li>
  ))}
</ul>
);

Semantics.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts };
};

export default Semantics;