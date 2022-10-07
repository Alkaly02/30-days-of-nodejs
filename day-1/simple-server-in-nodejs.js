const http = require('http')

const host = '127.0.0.1'
const port = 5000

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("Server working success")
})

server.listen(port, host, (error) => {
    if (error) {
        console.log("Error occured : ", error);
        return
    }
    console.log(`Server in running on ${host}:${port}`);
}
)