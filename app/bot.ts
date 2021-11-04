import { DiscordActivityTypes, editBotStatus, startBot } from "discord/mod.ts";
import { config } from "~/config.ts";
startBot({
  token: config.token, // config.token,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    ready() {
      console.log("I am now online!");
      editBotStatus({
        status: "dnd",
        activities: [
          {
            name: "ishanjaiswal.com",
            type: DiscordActivityTypes.Watching,
            createdAt: Date.now(),
          },
        ],
      });
    },
  },
});
