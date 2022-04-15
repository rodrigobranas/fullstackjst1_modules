const x = Buffer.from("x");
const y = Buffer.from("y");
const xy = Buffer.concat([x, y]);
console.log(xy.toString());
