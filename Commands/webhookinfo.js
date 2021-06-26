const Discord = require('discord.js')
module.exports = {
    name:"webhookinfo",
    description:"A simple ping pong command",
    execute: async function(message, args, client, user) {
        const webhook = args[0]
        if(!webhook){
            const embed = new Discord.MessageEmbed()
            .setTitle("No webhook!")
            .setDescription("You need to send a webhook!")
            .setColor("RED")
            .setTimestamp()
        }
        const { data } = await axios.get(webhook)
        message.channel.send(data)
    }
}