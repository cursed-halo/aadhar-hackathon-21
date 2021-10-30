const http = require('http');
const fs=require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('sign_tenant.html',function(error,data)
  {
      if(error)
      {
          res.writeHead(404);
          res.write("Error");
      }
      else{
          res.write(data)
      }
      res.end();
  })
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});