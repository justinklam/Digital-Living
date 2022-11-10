import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// React Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const state = useLocation().state;

  // If state exists, use the title from it else ""
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:8080/api/upload",
        formData
      );
      return res.data;
    } catch (error) {
      console.log("Upload:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = upload();
    try {
    } catch (error) {
      console.log("Post Submit:", error);
    }
  };

  return (
    <div className="writePost">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            type="file"
            id="file"
            name=""
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input
              type="radio"
              name="category"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="category"
              value="cinema"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="category"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="category"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="category"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
