var fs = require("fs");
var zlib = require("zlib");
//compress the file test.txt to compress.txt.gz
//pipe can solve bufferoverflow problem
// zlib compresses file
fs.createReadStream("test.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("compress.txt.gz"));
console.log("File compressed");