const { readPosts, writePosts } = require('./storage/blogStorage');

let postIdCounter = 0;

const createPost = (title, content) => {
  const newPost = {
    id: ++postIdCounter,
    title,
    content
  };
  writePosts([...readPosts(), newPost]);
  return newPost;
};

const getPosts = () => {
  return readPosts();
};

const getPost = (id) => {
  return readPosts().find(post => post.id === id);
};

const updatePost = (id, title, content) => {
  const posts = readPosts();
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex !== -1) {
    posts[postIndex] = { id, title, content };
    writePosts(posts);
    return posts[postIndex];
  }
  return null;
};

const deletePost = (id) => {
  const posts = readPosts();
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    writePosts(posts);
    return true;
  }
  return false;
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
};