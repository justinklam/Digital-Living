export const getPosts = (req, res) => {
  // req.query.cat takes everything after the URL address cat
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
};

export const getPost = (req, res) => {
  res.json("fromController");
};

export const addPost = (req, res) => {
  res.json("fromController");
};

export const deletePost = (req, res) => {
  res.json("fromController");
};

export const updatePost = (req, res) => {
  res.json("fromController");
};
