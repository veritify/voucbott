const Discord = require('discord.js')
module.exports = {
    name:"helpfun",
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(message, args, client, user) {
        const embed = new Discord.MessageEmbed()
        .setTitle("All Fun Commands")
        .addFields(
            {
                name: "+binary (decode/encode)",
                value: "Encodes/Decodes your message",
                inline: true
            },
            {
                name: "+ping",
                value: "Sends Pong!",
                inline: true
            }
        )
    }
}