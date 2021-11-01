FROM denoland/deno:alpine

WORKDIR /app

USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .


CMD ["run", "--import-map=dependencies.json", "--allow-env", "--allow-net", "--allow-read=/app", "--allow-write=/app", "app/bot.ts"]

