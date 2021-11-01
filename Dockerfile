FROM denoland/deno:alpine

WORKDIR /app

COPY . .


CMD ["run", "--import-map=dependencies.json", "--allow-env", "--allow-net", "--allow-read=/app", "--allow-write=/app", "app/bot.ts"]

