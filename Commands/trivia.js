const Discord = require('discord.js')
const a = require('axios')
module.exports = {
    name:"trivia",
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(message, args, client, user) {
        f = await a.get("https://opentdb.com/api.php?amount=1&type=multiple")
        message.channel.send(f)
    }
}