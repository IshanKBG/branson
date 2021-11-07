import { Application } from 'oak'
import { DiscordActivityTypes, editBotStatus, startBot } from "discord/mod.ts";
import { config } from "~/config.ts";

const app = new Application();


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

app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

await app.listen({ port: 8000});
