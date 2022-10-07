const http = require('http')

const port = 5000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "application/json"})
    let jsonResponse = {
        status: 200,
        message: 'successful',
        result: ['monday', 'tuesday', 'wednesday'],
        code: 2000
    }

    res.end(JSON.stringify(jsonResponse))
})

server.listen(port, (error) => {
    if(error) return console.log("Error: ", error);

    console.log("Server is running on port: ", port);
})