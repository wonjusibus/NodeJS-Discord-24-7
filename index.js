const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
var webdriver = require("./webdriver.js");

client.on("ready", () => {
  console.log("Successfully logged in!");
});

client.login(process.env.TOKEN);
