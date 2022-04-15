const fs = require("fs");
// fs.writeFileSync("read.txt", "my name is aryan tiwari");
// fs.appendFileSync("read.txt"," how are you bro");

const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);

orgdata = buf_data.toString();
console.log(orgdata);