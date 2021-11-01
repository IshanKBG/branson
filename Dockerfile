FROM denoland/deno:alpine

WORKDIR /app

COPY . .


CMD ["run", "--allow-env", "--allow-net", "--allow-read=/app", "--allow-write=/app", "app/bot.ts"]

