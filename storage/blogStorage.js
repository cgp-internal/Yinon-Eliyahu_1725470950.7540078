const fs = require('fs');
const path = require('path');

const STORAGE_FILE = path.join(__dirname, 'blogPosts.json');

let storage = [];

const readPosts = () => {
  try {
    const data = fs.readFileSync(STORAGE_FILE, 'utf8');
    storage = JSON.parse(data);
    return storage;
  } catch (error) {
    console.error(`Error reading from storage: ${error}`);
    return [];
  }
};

const writePosts = (posts) => {
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(posts, null, 2));
    storage = posts;
  } catch (error) {
    console.error(`Error writing to storage: ${error}`);
  }
};

module.exports = {
  readPosts,
  writePosts
};