const mi = require('minecraft-information');
const Discord = require('discord.js')
module.exports = {
    name:"mcinfo",
    execute: async function(message, args, client, user) {
        const query = args.join(' ')
        if(!query)return message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription("Please enter a username!")
            .setColor("BLUE")
            .setTimestamp()
        )
        mi.profile(query).then(async(res) => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Found!")
            .setDescription(res)
            .setColor("BLUE")
            .setTimestamp()
            message.chanel.send(embed)
    })
}
}