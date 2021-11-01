FROM denoland/deno:alpine

WORKDIR /app

COPY . .

CMD ["run", "--allow-net", "--allow-read=/app", "--allow-write=/app", "app/bot.ts"]

