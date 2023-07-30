const fs = require('fs');
const util = require('util');

// Promisify the fs.unlink function
const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`File "${filePath}" successfully deleted.`);
  } catch (err) {
    console.error(`Error deleting file "${filePath}": ${err.message}`);
  }
}

// Usage example
const fileToDelete = './static_files/test.txt';

deleteFile(fileToDelete);