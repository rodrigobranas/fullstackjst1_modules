import net from "net";

net.createServer(socket => socket.pipe(process.stdout)).listen(3000);
