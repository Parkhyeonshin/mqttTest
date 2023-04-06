const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer();
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log(`message: ${msg}`);
    io.emit("chat message", msg);
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
