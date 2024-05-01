import { Client, Message } from "https://deno.land/x/harmony/mod.ts";

import { load } from "https://deno.land/std/dotenv/mod.ts";
await load({
  export: true,
});
const client = new Client({
  intents: [
    "GUILDS",
    "DIRECT_MESSAGES",
    "GUILD_MESSAGES",
  ],
  token: Deno.env.get("BOT_TOKEN"),
});

client.on("ready", () => {
  console.log(`Ready! User: ${client.user?.tag}`);
});

client.on("messageCreate", (msg: Message): void => {
  switch (msg.content) {
    case "@ping":
      msg.channel.send(`Pong! WS Ping: ${client.gateway.ping}`);
  }
});

// Connect to gateway
client.connect();
