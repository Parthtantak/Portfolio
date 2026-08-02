const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Parth Nitin Tantak\\.gemini\\antigravity-ide\\brain\\16307446-ccd5-4919-9ed7-08aee25e7f77\\media__1785501322703.jpg';
const destPublic = path.join(__dirname, 'public', 'parth.jpg');
const destSrc = path.join(__dirname, 'src', 'assets', 'parth.jpg');

fs.copyFileSync(src, destPublic);
fs.copyFileSync(src, destSrc);
console.log('Successfully copied new parth.jpg to public and src/assets!');

