const { createPost, getPosts, getPost, updatePost, deletePost } = require('./daos/blogDAO');

const createBlogPost = async (title, content) => {
  return await createPost(title, content);
};

const getBlogPosts = async () => {
  return await getPosts();
};

const getBlogPost = async (id) => {
  return await getPost(id);
};

const updateBlogPost = async (id, title, content) => {
  return await updatePost(id, title, content);
};

const deleteBlogPost = async (id) => {
  return await deletePost(id);
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost
};