import React from "react";

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
        </div>
        <div className="info">
          <span>user1</span>
          <p>Posted 2 days ago</p>
        </div>
      </div>
      <div className="menu">Menu</div>
    </div>
  );
};

export default Single;
