process.stdin.on("readable", function () {
	const data = process.stdin.read();
	console.log(data.toString());
});
