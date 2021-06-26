const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
module.exports = {
    name:"8ball",
    execute: async function(message, args, client, user) {
        
        const answers = [
            "Yes", "No", "Maybe", "Never", "For sure", "I don't know"
        ];
        const a = answers[Math.floor(Math.random() * answers.length)]

        return message.channel.send(
            new MessageEmbed()
            .setAuthor("8ball")
            .setDescription(
                `Question: ${args.join(" ")}\n Answer: ${a}`
            )
            .setColor("BLUE")
            .setTimestamp()
        )
    }
}