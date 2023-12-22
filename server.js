let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let router = require('./routers/router');
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);
var data = new Date();

io.on('connection',(socket)=>{
    console.log('Client connection established succesfully');
    socket.on('disconnect', () => {
        console.log('User has been disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
        socket.emit('time', data.getHours()+'h : '+data.getMinutes()+ 'm : '+data.getSeconds());
    }, 2000)
});

http.listen(port, ()=>{
    console.log('Express server started successfully');
});
