const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class for4kCommand extends BaseCommand {
    constructor() {
      super('4k', '4k', ['nsfw'], '4k');
    }

run = (client, message, args) => {

    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('You must use this command in an nsfw lounge!') 

    var lo = new Discord.MessageEmbed()
    .setDescription(`Please wait... <a:Loading:592829210054098944>`)
    .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
            .setDescription(`:underage:\n**[image not loading? click here](${response.body.message})**`)
            .setTimestamp()
                .setImage(response.body.message)
            
            m.edit(embed_nsfw);
        });
    });
}
}
