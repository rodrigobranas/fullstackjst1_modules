import net from "net";

net.createServer(socket => {
	let buffer = Buffer.alloc(0);
	let i = 0;
	socket.on("data", chunk => {
		buffer = Buffer.concat([buffer, chunk]);
		const end = true; // buffer[buffer.length - 2] === 13 && buffer[buffer.length - 1] === 10;
		if (end) {
			const requestRaw = buffer.toString("utf8");
			const requestLines = requestRaw.split(/\r\n/);
			const [requestLine] = requestLines;
			const [method, url, protocol] = requestLine.split(" ");
			console.log(method, url, protocol);
			const headerLines = requestLines.slice(1, requestLines.length - 2);
			const headers: { [headerKey: string]: string} = {};
			for (const headerLine of headerLines) {
				const [headerKey, headerValue] = headerLine.split(": ");
				headers[headerKey] = headerValue;
			}
			console.log(headers);
			const body = requestLines[requestLines.length - 1];
			console.log(body);
			const response = new Response(200, { "Content-Type": "text/plain" }, "FullStack");
			socket.end(response.value);
		}
	});
}).listen(3000);

class Response {
	value: string;
	status: { [statusCode: string] : string } = {
		"200": "OK"
	} 

	constructor (readonly statusCode: number, readonly headers: { [key: string]: string }, data: string) {
		const responseLine = `HTTP/1.1 ${statusCode} ${this.status[statusCode]}`;
		const separator = "\r\n";
		this.value = [
			responseLine,
			separator,
			Object.entries(headers).map(entry => `${entry[0]}:${entry[1]}`).join("\r\n"),
			separator,
			separator,
			data,
			separator
		].join("");
	}
}