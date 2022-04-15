import net from "net";

const socket = net.createConnection(3000, "localhost");
socket.on("connect", () =>  {
	socket.write("GET / HTTP/1.1\r\n\r\n");
});
socket.on("data", chunk => {
	console.log(chunk.toString());
});
