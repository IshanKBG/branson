import { Config } from "~/types/mod.ts";
import { config as env } from "env/mod.ts";
const token = env().DISCORD_TOKEN || Deno.env.get("DISCORD_TOKEN");
if (!token) throw new Error("NO TOKEN");
export const config: Config = {
  token,
};
