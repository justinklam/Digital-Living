import React, { useState } from "react";
import { Link } from "react-router-dom";

// React Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="writePost">
      <div className="content">
        <input type="text" placeHolder="Title" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
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
          <input type="file" name="" id="" />
        </div>
        <div className="item">Item 2</div>
      </div>
    </div>
  );
};

export default Write;
