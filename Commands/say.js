const Discord = require('discord.js')
module.exports = {
    name:"say",
    execute: async function(message, args, client, user) {
        const message = args.join(" ")
        message.channel.send(message)
    }
}