import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "title1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pulvinar erat. In leo velit, blandit sed volutpat vel, dapibus et massa. Cras consectetur, diam vel volutpat auctor, libero ex eleifend purus, eget congue purus purus vel elit. Donec eu lorem rutrum, tempus enim feugiat, hendrerit tellus. Phasellus ac iaculis felis. Vivamus molestie nunc sapien, eget volutpat ante pulvinar ut. Integer efficitur suscipit ex ut laoreet. Duis a rhoncus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sem vitae nunc elementum posuere sit amet vel libero. Donec lorem nisi, mollis vel interdum sed, auctor id magna. Etiam venenatis nibh sed tortor lacinia dapibus",
      img: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "title2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pulvinar erat. In leo velit, blandit sed volutpat vel, dapibus et massa. Cras consectetur, diam vel volutpat auctor, libero ex eleifend purus, eget congue purus purus vel elit. Donec eu lorem rutrum, tempus enim feugiat, hendrerit tellus. Phasellus ac iaculis felis. Vivamus molestie nunc sapien, eget volutpat ante pulvinar ut. Integer efficitur suscipit ex ut laoreet. Duis a rhoncus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sem vitae nunc elementum posuere sit amet vel libero. Donec lorem nisi, mollis vel interdum sed, auctor id magna. Etiam venenatis nibh sed tortor lacinia dapibus",
      img: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "title3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis pulvinar erat. In leo velit, blandit sed volutpat vel, dapibus et massa. Cras consectetur, diam vel volutpat auctor, libero ex eleifend purus, eget congue purus purus vel elit. Donec eu lorem rutrum, tempus enim feugiat, hendrerit tellus. Phasellus ac iaculis felis. Vivamus molestie nunc sapien, eget volutpat ante pulvinar ut. Integer efficitur suscipit ex ut laoreet. Duis a rhoncus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis sem vitae nunc elementum posuere sit amet vel libero. Donec lorem nisi, mollis vel interdum sed, auctor id magna. Etiam venenatis nibh sed tortor lacinia dapibus",
      img: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;