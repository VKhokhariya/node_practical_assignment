const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper');

const zipFilePath = path.resolve('./statisFiles.zip'); // Replace this with the absolute path to your zip file
const extractDir = path.resolve('./extract_zip'); // Replace this with the absolute path of the directory where you want to extract the files

// Create a read stream for the zip file
const readStream = fs.createReadStream(zipFilePath);

// Extract the files from the zip archive
readStream.pipe(unzipper.Extract({ path: extractDir }))
  .on('finish', () => {
    console.log('Extraction completed successfully.');
  })
  .on('error', (err) => {
    console.error('Error occurred during extraction:', err);
  });
