import fs from "fs";

const getConfig = () => {
	const configFile = fs.readFileSync("./config.json", "utf-8");
	return JSON.parse(configFile);
};

export default getConfig;
