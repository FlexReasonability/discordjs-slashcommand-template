import { commands } from "../commands.js";

const getCommandsDescription = () => {
	return commands.map((command) => ({
		name: command.name,
		description: command.description,
	}));
};

const execCommand = async (interaction) => {
	try {
		console.log(interaction.commandName);
		const command = commands.filter(
			(c) => c.name === interaction.commandName
		)[0];
		await command.function(interaction);
	} catch (e) {
		console.log(e);
		interaction.reply("Une erreur est survenue");
	}
};

export { getCommandsDescription, execCommand };
