import { Client, GatewayIntentBits } from "discord.js";
import "./src/preload/rest.js";
import { execCommand } from "./src/commands/commands.js";
import getConfig from "./src/utils/config.js";

const config = getConfig();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	await execCommand(interaction);
});

client.login(config.token);
