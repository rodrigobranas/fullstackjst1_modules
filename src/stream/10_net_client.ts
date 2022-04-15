import net from "net";

process.stdin.pipe(net.connect(3000));
