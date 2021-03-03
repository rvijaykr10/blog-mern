import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPage = ({ history, match }) => {
  const postId = match.params.id;

  const [title, setTitle] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchedPost = async () => {
      const { data } = await axios.get(`/api/posts/${postId}`);
      setTitle(data.title);
      setImagePath(data.imagePath);
      setDescription(data.description);
      // console.log(data);
    };
    fetchedPost();
  }, [postId]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImagePath(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log("submitted");
    const formData = { title, imagePath, description };
    await axios.put(`/api/posts/${postId}`, formData);
    // console.log(data);
    history.push(`/`);
  };
  return (
    <form className="mt-3" onSubmit={onSubmitHandler}>
      <h2 className="mx-auto">Edit Page</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="imagePath"
            placeholder="Enter Title"
            value={imagePath}
            onChange={(e) => setImagePath(e.target.value)}
          />
          <input
            type="file"
            className="form-control-file"
            id="image"
            custom
            onChange={uploadFileHandler}
          />
        </div>
      </form>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-info">
        Update Post
      </button>
    </form>
  );
};

export default EditPage;
