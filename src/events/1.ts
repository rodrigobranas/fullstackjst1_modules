import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();
eventEmitter.on("event", function (data) {
	console.log(data);
});

eventEmitter.emit("event", { x: 42 });
