const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name:"webhookinfo",
    description:"A simple ping pong command",
    execute: async function(message, args, client, user) {
        const webhook = args.join(' ')
        if(!webhook){
            const embed = new Discord.MessageEmbed()
            .setTitle("No webhook!")
            .setDescription("You need to send a webhook!")
            .setColor("RED")
            .setTimestamp()
        }
        const { data } = await axios.get(args[0])
        message.channel.send("INFO: " + data.text)
    }
}