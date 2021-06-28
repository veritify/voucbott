const Discord = require('discord.js')
module.exports = {
    name:"guild",
    aliases: ["guildcount"],
    execute: async function(message, args, client, user) {
        f = `I am in ${client.guilds.cache.size} servers!`
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Servers!")
            .setDescription(f)
            .setTimestamp()
            .setColor("BLUE")
        )
        
    }
}