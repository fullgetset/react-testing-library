import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const loadUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3",
      {
        method: "GET",
      }
    );

    const commit = await response.json();

    return setPosts(commit);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id} data-testid="post-item">
          {post.id}
        </Link>
      ))}
    </div>
  );
};

export default Posts;
