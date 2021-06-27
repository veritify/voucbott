const Discord = require('discord.js')
module.exports = {
    name:"membercount",
    execute: async function(message, args, client, user) {
        const guild = message.guild
        const members = guild.MemberCount;
        message.channel.send(`Members: ${members}`)
    }
}