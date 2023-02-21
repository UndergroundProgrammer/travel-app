import { io } from "socket.io-client";
const socket = io.connect("https://trip-app-backend.up.railway.app/");

export default socket;
