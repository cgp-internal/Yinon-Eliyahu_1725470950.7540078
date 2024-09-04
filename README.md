Blog Application README
=======================

This is a Node.js blog application using Express.js as the web framework. The application allows users to create, read, update, and delete blog posts.

How to Run
-----------

1. Install Node.js on your system if it's not already installed.
2. Run the `run.sh` script to set up the project and install the required dependencies, including Express.js.
3. Start the server by running `node app.js` in the project root directory.
4. Open a web browser and navigate to `http://localhost:3000` to access the blog application.

Application Structure
-------------------

* `app.js`: The main entry point for the application, which sets up the Express server and defines routes.
* `routes/blog.js`: Defines routes for CRUD operations on blog posts.
* `controllers/blog.js`: Handles CRUD operations on blog posts, interacting with the data access layer.
* `daos/blogDAO.js`: Data access object for interacting with the JSON file storage.
* `storage/blogStorage.js`: Reads and writes blog post data to a JSON file.
* `models/blogPost.js`: Defines the structure of a blog post: id, title, and content.

Note: The application uses a JSON file for storage, so you don't need to set up a database. The `run.sh` script takes care of setting up the project and installing the required dependencies.