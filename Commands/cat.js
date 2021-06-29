const Discord = require('discord.js')
const axios = require("axios")
const request = require("request")
module.exports = {
    name:"cat",
    execute: async function(message, args, client, user) {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.MessageEmbed()
                    .setImage(body)
                    .setColor("BLUE")
                    .setTitle("Here is your random cat")
                   message.channel.send(emb)  
            }
        })
    }
}