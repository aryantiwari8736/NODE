const fs = require("fs");


const biodata = {

    name : "Aryan",
    age: 18,
    channel: "Today Technical",
};
// console.log(biodata.channel);


// const jsondata = JSON.stringify(biodata);
// console.log(jsondata)

// this is jsondata
// "name":"Aryan","age":18,"channel":"Today Technical"

// const objdata = JSON.parse(jsondata);
// console.log(objdata);

// creating json file 
// fs.writeFile("jsonfile.json",jsondata,(err)=>{
//     console.log("done");
// });

// reading jsonfile 
fs.readFile("jsonfile.json","utf-8",(err,data) => {
    // console.log(data);
    const orgdata = JSON.parse(data);
    console.log(orgdata);
})