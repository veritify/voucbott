const Discord = require('discord.js')
module.exports = {
    name:"membercount",
    execute: async function(message, args, client, user) {
        const {guild} = message
        const {name,region,memberCount, owner} = guild
        const icon = guild.iconURL()
        message.channel.send(`Member Count: ${memberCount}`);//123
    }
}