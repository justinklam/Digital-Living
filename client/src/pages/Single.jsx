import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import moment from "moment";

// Components
import Menu from "../components/Menu";

// Image assets
import editIcon from "../img/edit.png";
import deleteIcon from "../img/delete.png";

const Single = () => {
  const [post, setPost] = useState({});

  // To locate URL
  const location = useLocation();

  const navigate = useNavigate();

  // To pull post number
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        console.log("Post:", error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${postId}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      console.log("Delete:", error);
    }
  };

  // to remove html tags on text body
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        {/* If post exists, render. To resolve loading errors */}
        {/* <img src={post?.img} alt="" /> */}
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img className="edit-inner" src={editIcon} alt="edit" />
              </Link>
              <Link>
                <img
                  className="delete-inner"
                  src={deleteIcon}
                  alt="delete"
                  onClick={handleDelete}
                />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
