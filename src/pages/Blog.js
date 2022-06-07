import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Blogs</h1>

      {!isLoading ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
export default Blog;
