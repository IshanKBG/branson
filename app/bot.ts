import { startBot } from "./lib/deps.ts";
import { config } from "./config.ts";

startBot({
  token: config.token, // config.token,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    ready() {
      console.log("Successfully connected to gateway");
    },
    messageCreate(message) {
      // Process the message with your command handler here
    },
  },
});
