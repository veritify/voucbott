const mi = require('minecraft-information');
const Discord = require('discord.js')
module.exports = {
    name:"mcinfo",
    execute: async function(message, args, client, user) {
        const query = args[0]
        if(!query)return message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription("Please enter a username!")
            .setColor("BLUE")
            .setTimestamp()
        )
        mi.profile(query).then(async(res) => {
            await message.chanel.send(res)
    })
}
}