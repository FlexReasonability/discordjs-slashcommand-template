# DISCORD.JS SLASH-COMMAND template

## configuration

### step 1: discord api keys

fix config.json with your credentials (don't push this file on remote)

```config.json
{
	"client_id": "your application id",
	"token": "your bot token"
}
```

### step 2: set-up

```bash
npm install
```

### step 3: run

```bash
npm run start
```

## Add a command

src/commands/commands.js: add to commands list your own commands
function must respect the following prototype: (ChatInputCommandInteraction) => void

```
const commands = [
	{
		name: "ping",
		description: "Replies with Pong!",
		function: ping,
	}
];
```
