// Buffer

const buffer3 = Buffer.from("áéíóú", "latin1");
console.log(buffer3.toString("latin1"));
const buffer4 = Buffer.from("áéíóú", "utf8");
console.log(buffer4.toString("utf8"));

console.log(buffer3.toString("utf8"));
console.log(buffer4.toString("latin1"));
