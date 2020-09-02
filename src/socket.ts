import io from "socket.io-client";

const port = 3000;
const socket = io(`http://localhost:${port}`);
console.log("socket connection passed..");
export default socket;
