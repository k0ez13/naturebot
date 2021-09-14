# Nature Bot
> Made with NODE JS with basic functions and with the intention of being functional.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

![](header.png)

## Installation

OS X & Linux & Windows:

```sh
git clone https://github.com/k0ez13/naturebot.git
cd naturebot
npm update && install
```

### .env EXAMPLE:

| Vars | token |
| --- | --- |
| DISCORD_BOT_PREFIX =| n!  |
| DISCORD_BOT_TOKEN = | [`Bot token`](https://discord.com/developers/applications) |
| STEAM = | [`Steam token`](https://steamcommunity.com/dev/apikey) |
| YOUTUBE_API_KEY = | [`Youtube token`](https://console.cloud.google.com/apis) |

## How to start the bot

Right after running the update and compiling the code, just follow the following steps for the bot to start working.

```sh
cd naturebot
node ./src/bot.js
```
If your console returns the bot's name along with its id "name#0000", it means the bot is working properly!

## Bot commands
| Class | Commands |
| --- | --- |
| Misc [20]: | corona, creator, 8ball, gnome, help, instagram, math, meme, oceanman, ping, pokemon, poll, roll, serverinfo, steam, uptime, urban, userinfo, weather, avatar |
| Mod [7]: | ban, clear, kick, mute, say, unmute, hoststats |
| Music [9]: | leave, loop, nowplaying, pause, play, queue, remove, skip |
|NSFW [13]: | 4k, anal, ass, hentai, hkitsune, hneko, holo, kemonomimi, neko, pussy, boobs, hboobs, kanna |

## Contributing

1. Fork it (<https://github.com/k0ez13/naturebot/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
