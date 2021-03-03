import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({ history }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [postId, setPostId] = useState(null);
  useEffect(() => {
    const fetchedPosts = async () => {
      const posts = await axios.get("/api/posts");
      const data = await posts.data;
      setPosts(data);
      setCount(data.length);
    };
    fetchedPosts();
    if (postId) {
      history.push(`/editpage/${postId}`);
    }
  }, [postId, posts.push, history]);

  const onEditHandler = (id) => {
    history.push(`/editpage/${id}`);
  };

  const onDeleteHandler = (id) => {
    const deletedPost = async () => {
      await axios.delete(`/api/posts/${id}`);
    };
    deletedPost();
    const updatedposts = posts.filter((p) => p._id !== id);
    setCount(updatedposts.length);
    setPosts(updatedposts);
    history.push("/");
  };

  const createProductHandler = () => {
    const createdPost = async () => {
      const { data } = await axios.post("/api/posts", {});
      const id = await data._id;
      setPostId(id);
    };
    createdPost();
  };
  return (
    <div className="row mt-3">
      <div className="col-md-9">
        <h2 className="ml-auto">Posts List ({count} posts)</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">ImgPath</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              // console.log(post);
              return (
                <tr key={post._id}>
                  <th scope="row">{post._id}</th>
                  <td>{post.title}</td>
                  <td>
                    <img
                      src={post.imagePath}
                      alt="sample.jpg"
                      width="100px"
                      height="50px"
                    />
                  </td>
                  <td>{post.description}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => onEditHandler(post._id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => onDeleteHandler(post._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={createProductHandler}
        >
          + Add Post
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
