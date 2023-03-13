
process.stdin.once("data",function(data){
    process.stdout.write("hello"+data.toString());
    process.stdin.pause();
});

process.stdout.write("What is your name?");
process.stdin.resume();
