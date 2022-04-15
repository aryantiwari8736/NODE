const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`Hello World this is rohan das 
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color in CSS</title>
    <style>
        /* color by name , color by hexvalue ,color by rgb value */
        #firstheading{
            
            color: orange;
            border: 3px solid red;
        }
        #firstpara{
            color: blue;
            border: 3px solid skyblue;
        }
        #secondpara{
                    color: rgb(114, 243, 232);
                    border: 3px solid blue;
        }
        #thirdpara{
        color: rgb(199, 104, 156);
        border: 3px solid darkmagenta;
        }
    </style>
</head>
<body>
    <h3 id="firstheading">This is my first box</h3>
    <p id="firstpara">this is a paragraph from first box </p>
    <p id="secondpara">this is a second paragraph from first box </p>
    <p id="thirdpara">this is a third paragraph from first box </p>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});