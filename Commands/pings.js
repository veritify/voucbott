const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name:"ping",
    execute: async function(message, args, client, user) {
        message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(`${message.author.displayAvatarURL} ${message.author.tag}`)
            .setColor("BLUE")
            .addFields({
                name: "Bot Latency",
                value: ping+"ms",
                inline: true
            },
            {
                name: "API Latency",
                value: client.ws.ping+"ms",
                inline: true
            }
            )
        )
    }
}