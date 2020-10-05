const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
 
module.exports = class AvatarCommand extends BaseCommand {
    constructor() {
      super('avatar', 'avatar', ['avatar'], 'avatar');
    }
  
    async run(client, message, args) {
        if(!message.mentions.users.first()){
            embed.setTitle("Your Avatar:")
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setDescription("This is your avatar.")
            embed.setColor("RANDOM")
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setTitle(`${user.tag}'s Avatar:`)
            embed.setThumbnail(user.displayAvatarURL())
            embed.setDescription(`This is ${user.tag}'s avatar.`)
            embed.setColor('RANDOM')
            embed.setFooter("This is a test.")
            return message.channel.send(embed)
        }
    }
  }