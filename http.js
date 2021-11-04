const http = require('http');

const server = http.createServer((req , res) => {

  if(req.url === '/') {

  	res.write('hello Mahdi from node');

    res.end();
  }


  if(req.url ==='/api/course') {

  	res.write(JSON.stringify([1,2,3]));
  	res.end();
  }

});

/*
server.on('connection' , (socket) => {
   
   console.log("new connection is running");
});
*/


server.listen('3000');

console.log('Listenning to port 3000 ...');