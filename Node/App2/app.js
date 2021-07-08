const http = require('http');

const emp = {
    id: '1024',
    name: 'Praveen',
    salary: 4865455
}

const student = {
    id: 'S001',
    name: 'James',
    grade: 'A'
}

http.createServer((req, resp) => {


    console.log("=========================");
    
    console.log("=========================");


    if (req.url === '/' && req.method == 'GET') {
        // resp.writeHead(200, { method: 'GET' });
        resp.write('<h1>Hello, Node.js! GET....</h1>');

    }

  

    if (req.url === '/' && req.method == 'POST') {
        // resp.writeHead(200, { method: 'POST' });
        resp.write('<h1>Hello, Node.js!.... POST</h1>');
        console.log(req.param);

    }


    
    if (req.url === '/emp') {
        resp.write(JSON.stringify(emp));
    }

    if (req.url === '/student') {

        resp.write(JSON.stringify(student))
    }

    resp.end();
})
    .listen(3000, () => {
        console.log('server is running on port number 3000');
    });


