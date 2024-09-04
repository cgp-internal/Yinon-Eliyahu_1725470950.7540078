const express = require('express');
const app = express();
const blogRouter = require('./routes/blog');

app.use(express.json());
app.use('/blog', blogRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});