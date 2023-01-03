const express = require('express')
const http = require('http');
const { Server } = require("socket.io")
const app = express()
const httpServer = http.createServer(app);
const io = new Server(httpServer,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
});
const port = 4000

app.get('/hei', (req, res) => {
    res.send('Hello jord')
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("message", function(data){
        socket.broadcast.emit("reciveMessage", data)
        console.log(data)
    })
});

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
