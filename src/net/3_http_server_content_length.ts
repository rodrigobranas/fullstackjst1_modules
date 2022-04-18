import net from "net";

net.createServer(socket => {
	let buffer = Buffer.alloc(0);
	let chunks = 0;
	let contentLength: number;
	let contentType: string;
	let request: Request;
	let response: Response;
	socket.on("data", chunk => {
		buffer = Buffer.concat([buffer, chunk]);
		chunks++;
		if (chunks === 1) {
			const requestLine = buffer.slice(0, buffer.indexOf("\r\n")).toString("ascii");
			const [method, url, protocol] = requestLine.split(" ");
			const headersRaw = buffer.slice(buffer.indexOf("\r\n") + 2, buffer.indexOf("\r\n\r\n")).toString("ascii");
			const headers: { [key: string]: string } = {};
			for (const headerRaw of headersRaw.split(/\r\n/)) {
				const [headerKey, headerValue] = headerRaw.split(":");
				headers[headerKey] = headerValue.trim();
			}
			contentLength = parseInt(headers["Content-Length"]);
			contentType = headers["Content-Type"].split("charset=")[1] || "utf8";
			request = new Request(method, url, protocol, headers);
		}
		if (contentLength && buffer.length > contentLength) {
			console.log(`${chunks} chunks`);
			const bodyRaw = buffer.slice(buffer.indexOf("\r\n\r\n") + 4);
			console.log(bodyRaw.length);
			// @ts-ignore
			const body = bodyRaw.toString(contentType);
			request.body = body;
			response = new Response(200, { "Content-Type": "text/plain;charset=utf-8" });
			socket.end(response.value);
		}
	});
}).listen(3000);

class Request {
	body: string | undefined;

	constructor (readonly method: string, readonly url: string, readonly protocol: string, readonly headers: { [ key: string ]: string }) {
	}

	setBody (body: string) {
		this.body = body;
	}
}

class Response {
	value: string;
	status: {[key: string]: string} = {
		"200": "OK"
	}

	constructor (readonly statusCode: number, readonly headers: { [key:string]:string }, readonly body?: string) {
		const separator = "\r\n";
		const responseLine = `HTTP/1.1 ${statusCode} ${this.status[statusCode]}`;
		this.value = [
			responseLine,
			separator,
			Object.entries(headers).map(entry => `${entry[0]}:${entry[1]}`).join("\r\n"),
			separator,
			body,
			separator
		].join("");
	}
}
