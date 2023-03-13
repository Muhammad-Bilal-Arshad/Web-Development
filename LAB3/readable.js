var fs = require ("fs");
var data = "";
//create a readablestream
var readerStream = fs.createReadStream("test.txt");
//setting the encoding to utf-8
readerStream.setEncoding("UTF8");
//handle stream events ->data , end ,and error
readerStream.on('data',function(chunk){
    data += chunk;
});
readerStream.on("end",function(){
    console.log(data);
});
readerStream.on("error",function(err){
    console.log(err.stack);
});
console.log("program ended")

