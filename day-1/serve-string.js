const http = require('http')

const host = '127.0.0.1'
const port = 5000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"})
    res.write("Nodejs from Alkaly")
    res.end()
})

server.listen(port, (error) => {
    if(error) return console.log("Error occured :", error);

    console.log(`Server is running on ${host}:${port}`);
})