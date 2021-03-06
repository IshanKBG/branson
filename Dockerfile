FROM denoland/deno:alpine

WORKDIR /app

USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

CMD ["fmt"]
CMD ["lint"]
CMD ["run", "--import-map=import_map.json", "--allow-env", "--allow-net", "--allow-read", "app/bot.ts"]