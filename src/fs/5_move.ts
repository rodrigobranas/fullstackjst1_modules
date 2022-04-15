import fs from "fs/promises";

async function move () {
	const text = "FullStackJS";
	await fs.mkdir("a");
	await fs.writeFile("./a/fs1.txt", text);
	await fs.mkdir("b");
	await fs.rename("./a/fs1.txt", "./b/fs2.txt");
}

move();
