import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // To locate URL
  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/posts${category}`
        );
        setPosts(res.data);
      } catch (error) {
        console.log("Home:", error);
      }
    };
    fetchData();
  }, [category]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Title 1",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pulvinar erat. In leo velit, blandit sed volutpat vel, dapibus et massa. Cras consectetur, diam vel volutpat auctor, libero ex eleifend purus, eget congue purus purus vel elit. Donec eu lorem rutrum, tempus enim feugiat, hendrerit tellus. Phasellus ac iaculis felis. Vivamus molestie nunc sapien, eget volutpat ante pulvinar ut. Integer efficitur suscipit ex ut laoreet. Duis a rhoncus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sem vitae nunc elementum posuere sit amet vel libero. Donec lorem nisi, mollis vel interdum sed, auctor id magna. Etiam venenatis nibh sed tortor lacinia dapibus",
  //     img: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 2,
  //     title: "Title 2",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pulvinar erat. In leo velit, blandit sed volutpat vel, dapibus et massa. Cras consectetur, diam vel volutpat auctor, libero ex eleifend purus, eget congue purus purus vel elit. Donec eu lorem rutrum, tempus enim feugiat, hendrerit tellus. Phasellus ac iaculis felis. Vivamus molestie nunc sapien, eget volutpat ante pulvinar ut. Integer efficitur suscipit ex ut laoreet. Duis a rhoncus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sem vitae nunc elementum posuere sit amet vel libero. Donec lorem nisi, mollis vel interdum sed, auctor id magna. Etiam venenatis nibh sed tortor lacinia dapibus",
  //     img: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 3,
  //     title: "Title 3",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pulvinar erat. In leo velit, blandit sed volutpat vel, dapibus et massa. Cras consectetur, diam vel volutpat auctor, libero ex eleifend purus, eget congue purus purus vel elit. Donec eu lorem rutrum, tempus enim feugiat, hendrerit tellus. Phasellus ac iaculis felis. Vivamus molestie nunc sapien, eget volutpat ante pulvinar ut. Integer efficitur suscipit ex ut laoreet. Duis a rhoncus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sem vitae nunc elementum posuere sit amet vel libero. Donec lorem nisi, mollis vel interdum sed, auctor id magna. Etiam venenatis nibh sed tortor lacinia dapibus",
  //     img: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
