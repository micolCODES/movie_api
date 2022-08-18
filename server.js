//importing URL module

//importing HTTP module 
const http = require('http'),
  fs = require('fs'),
  url = require('url');

http.createServer((request, response) => {
  let addr = request.url,
    q = url.parse(addr, true),
    filePath = '';
    //The appendFile(); function takes three arguments:
        //the file name in which you want to append your new information
        //the new information to be appended
        //an error-handling function
    // \n adds a line break within a string
  fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Added to log.');
    }
  });

  if (q.pathname.includes('documentation')) {
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();

  });

}).listen(8080);
console.log('My test server is running on Port 8080.');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Node!\n');
}).listen(8080);

console.log('My first Node test server is running on Port 8080.');