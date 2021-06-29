const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name:"reverse",
    execute: async function(message, args, client, user) {
        message.channel.send(args.join(' ').split('').reverse().join(''));
    }
}