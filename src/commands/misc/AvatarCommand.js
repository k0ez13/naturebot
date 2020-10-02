const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');


module.exports = class AvatarCommand extends BaseCommand {
    constructor() {
      super('avatar', 'avatar', [], 'avatar');
    }

    async run (client, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);
    }
}