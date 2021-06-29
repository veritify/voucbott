const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name:"revers",
    execute: async function(message, args, client, user) {
        msg.channel.send(args.join(' ').split('').reverse().join(''));
    }
}