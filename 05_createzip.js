const fs = require('fs');
const archiver = require('archiver');

const sourceFolder = 'static_files'; // Replace this with the path to the folder you want to compress
const outputZipFile = 'statisFiles.zip'; // The name of the output ZIP file

// Create a writable stream to the output ZIP file
const output = fs.createWriteStream(outputZipFile);

// Create an archiver object with the zip format
const archive = archiver('zip', {
  zlib: { level: 9 }, // Compression level (0-9)
});

// Listen for 'error' events during the archiving process
archive.on('error', (err) => {
  throw err;
});

// Listen for 'close' event when the archiving process is finished
archive.on('close', () => {
  console.log('Archive created successfully.');
});

// Pipe the archive data to the output file stream
archive.pipe(output);

// Append all files from the source folder to the archive
archive.directory(sourceFolder, false);

// Finalize the archive (this will trigger the 'close' event)
archive.finalize();