const express = require('express');
const { createBlogPost, getBlogPosts, getBlogPost, updateBlogPost, deleteBlogPost } = require('./controllers/blog');

const blogRouter = express.Router();

blogRouter.post('/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await createBlogPost(title, content);
    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send({ message: 'Failed to create a new blog post' });
  }
});

blogRouter.get('/posts', async (req, res) => {
  try {
    const posts = await getBlogPosts();
    res.send(posts);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve blog posts' });
  }
});

blogRouter.get('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const post = await getBlogPost(id);
    if (!post) {
      res.status(404).send({ message: 'Blog post not found' });
    } else {
      res.send(post);
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve blog post' });
  }
});

blogRouter.put('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    await updateBlogPost(id, title, content);
    res.send({ message: 'Blog post updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to update blog post' });
  }
});

blogRouter.delete('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await deleteBlogPost(id);
    res.send({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to delete blog post' });
  }
});

module.exports = blogRouter;