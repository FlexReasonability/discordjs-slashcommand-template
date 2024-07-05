import { REST, Routes } from "discord.js";
import { getCommandsDescription } from "../commands/commands.js";
import getConfig from "../utils/config.js";

const config = getConfig();

const rest = new REST({ version: "10" }).setToken(config.token);

try {
	console.log("Started refreshing application (/) commands.");

	await rest.put(Routes.applicationCommands(config.client_id), {
		body: getCommandsDescription(),
	});

	console.log("Successfully reloaded application (/) commands.");
} catch (error) {
	console.error(error);
}
