import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/postsContext";

export default function PostDetails() {
  const posts = useContext(postsContext);

  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.id == postId;
  });

  console.log(post);
  return (
    <>
      <h2> Post Details Page</h2>
      <h1>{post.title}</h1>

      <p>{post.body}</p>
    </>
  );
}
