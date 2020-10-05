const Discord = require("discord.js");
const BaseCommand = require('../../utils/structures/BaseCommand');

class testCommand extends BaseCommand {
    constructor() {
      super('test', 'test', ['test', 'test'], 'test');
    }

async run  (client, message, args) {

    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('You must use this command in an nsfw lounge!') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Please wait... <a:Loading:592829210054098944>`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[L'image not loading? click here](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
            
            m.edit(embed_nsfw);
        });
    });
 }
}
