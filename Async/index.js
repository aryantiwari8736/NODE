const fs = require("fs");
// fs.writeFile("red.txt","my name is aryan :)", (err) => {
//     console.log("file is created");
// });
// fs.appendFile("red.txt","chal hat chutiye",(err) => {
//     console.log("task completed");
// });
fs.readFile("red.txt","utf-8",(err,data)=>{
    console.log(data);
});