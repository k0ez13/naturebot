const superagent = require("node-fetch");
const Discord = require('discord.js')

const rp = require('request-promise-native');
const BaseCommand = require('../../utils/structures/BaseCommand');

class testCommand extends BaseCommand {
    constructor() {
      super('test', 'test', ['test', 'test'], 'test');
    }

async run  (client, message, args, level) {

    var errMessage = "This is not an NSFW Channel";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

  return rp.get('http://api.obutts.ru/butts/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.obutts.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const ass = new Discord.MessageEmbed()
      .setTitle("Ass")
      .setColor(`#FF0000`)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])


    message.channel.send(ass);
});
  }
  };
