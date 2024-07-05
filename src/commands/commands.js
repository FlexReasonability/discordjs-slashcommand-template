import { describe } from "node:test";
import ping from "./ping.js";
import { getCommandsDescription, execCommand } from "./utils/utils.js";

const commands = [
	{
		name: "ping",
		description: "Replies with Pong!",
		function: ping,
	},
];

export { commands, getCommandsDescription, execCommand };
