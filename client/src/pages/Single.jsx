import React from "react";
import { Link } from "react-router-dom";

// Image assets
import editIcon from "../img/edit.png";
import deleteIcon from "../img/delete.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img2"
          />
          <div className="info">
            <span>user1</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={editIcon} alt="edit" />
            </Link>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
      </div>
      <div className="menu">Menu</div>
    </div>
  );
};

export default Single;
