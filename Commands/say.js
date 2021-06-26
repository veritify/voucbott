const Discord = require('discord.js')
module.exports = {
    name:"say",
    execute: async function(message, args, client, user) {
        message.delete()
        const wad = args.join(" ")
        message.channel.send(wad)
    }
}