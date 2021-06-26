const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name:"webhookinfo",
    description:"A simple ping pong command",
    execute: async function(message, args, client, user) {
        const webhook = args.join(' ')
        if(!webhook){
            const embed = new Discord.MessageEmbed()
            .setTitle("No webhook!")
            .setDescription("You need to send a webhook!")
            .setColor("RED")
            .setTimestamp()
        }
        const { data } = await axios.get(args[0])
        const embed = new Discord.MessageEmbed()
        .setTitle("Webhook Information")
        .addFields( 
            {
                name: "Webhook ID",
                value: data.id,
                inline: true
            },
            {
                name: "Webhook Name",
                value: data.name
            },
            {
                name: "Webhook Avatar",
                value: data.avatar,
                inline: true
            },
            {
                name: "Channel ID",
                value: data.channel_id,
                inline: true
            },
            {
                name: "Guild ID",
                value: data.guild_id,
                inline: true
            },
            {
                name: "Token",
                value: data.token,
                inline: true
            },
            {
                name: "Application ID",
                value: data.application_id,
                inline: true
            }
        )
        message.channel.send(embed)
    }
}