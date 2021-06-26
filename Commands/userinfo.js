const Discord = require('discord.js')
const embed = require('discord.js')
module.exports = {
    name:"userinfo",
    aliases: ["info", "whois"],
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(client,message, args) {
        let user = message.mentions.users.first()
        if(!user) {
            const e = new Discord.MessageEmbed()
            .setDescription("You need to mention someone!")
            .setTimestamp()
            .setColor("RED")
            message.channel.send(e)
        }
        const embed = new Discord.MessageEmbed()
        .setDescription(`Name: ${user.username} \n ID: ${user.id}`)
        message.channel.send(embed)

    }
}