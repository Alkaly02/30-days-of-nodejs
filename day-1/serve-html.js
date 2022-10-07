const http = require('http')
const fs = require('fs')

const port = 5000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"})
    fs.readFile('index.html', (err, data) => {
        if(err) throw err

        console.log("Operation success");
        res.end(data)
    })
})

server.listen(port, (err) => {
    if(err){
        console.log("Error: ", err);
        return
    }

    console.log("Server is running on port: ", port);
})