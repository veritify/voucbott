const Discord = require('discord.js')
module.exports = {
    name:"helpfun",
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
            },
            {
                name: "+say",
                value: "Sends back your message.",
                inline: true
            },
            {
                name: "+webhookinfo (webhook)",
                value: "Sends information an a webhook.",
                inline: true
            }
        )
        .setColor("BLUE")
        message.channel.send(embed)
    }
}