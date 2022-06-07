import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .finally(() => setIsLoading(false));
  });

  return (
    <div>
      {!isLoading ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
export default Post;
