import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
        console.log("Home:", error);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        {/* If post exists, render. To resolve loading errors */}
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img className="edit-inner" src={editIcon} alt="edit" />
              </Link>
              <Link>
                <img className="delete-inner" src={deleteIcon} alt="delete" />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo a
          lectus rutrum ornare ac laoreet lorem. Cras sit amet purus sed arcu
          tempus iaculis. Fusce consequat eros ex, sit amet pretium arcu
          sagittis id. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Pellentesque vel commodo lacus, aliquet interdum metus.
          Aliquam condimentum leo et vestibulum vehicula. Vivamus lobortis
          finibus augue a pellentesque. Fusce quis ligula nulla. In hac
          habitasse platea dictumst. Integer egestas ipsum in nisl suscipit
          semper. Nam eu rhoncus massa. Fusce a imperdiet lacus. In felis
          tellus, feugiat tempor orci quis, condimentum posuere leo. Etiam at
          commodo dolor, sed porttitor est. Vestibulum sit amet purus sit amet
          quam rutrum fermentum. Cras eget sagittis ipsum. Morbi euismod viverra
          risus, at ultrices dolor fermentum et. Mauris eu fermentum lacus.
        </p> */}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
