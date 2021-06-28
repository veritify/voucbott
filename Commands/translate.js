const Discord = require('discord.js')
const translate = require('@iamtraction/google-translate')
module.exports = {
    name:"translate",
    execute: async function(message, args, client, user) {
        const query = args.join(' ')
        if(!query) return message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription("Please enter a text to translate!")
            .setColor("BLUE")
            .setTimestamp()
        )
        const translated = await translate(query, {to: "en"});
        message.channel.send(
            new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle("Translated!")
            .setDescription(translated.text)
            .setColor("BLUE")
            )
    }
}