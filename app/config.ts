import { env } from "./lib/deps.ts";
const token = env().TOKEN || Deno.env.get("TOKEN");
if (!token) throw new Error("NO TOKEN");
import { Config } from "./types/mod.ts";
export const config: Config = {
  token,
};
