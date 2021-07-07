const http = require('http');


let emp = {
    id: 1024,
    name: 'James',
    salary: 834683
}


const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
   // response.write("Hello, this is dog.");
    response.write(JSON.stringify(emp));

    response.end();
});


server.listen(3000, () => {
    console.log('server  app started on port number 3000, http://localhost:3000');
})


