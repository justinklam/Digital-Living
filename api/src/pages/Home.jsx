import React from "react";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "title1",
      desc: "desc1",
      img: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "title2",
      desc: "desc2",
      img: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "title3",
      desc: "desc3",
      img: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return <div className="home">Home</div>;
};

export default Home;
