const Discord = require('discord.js')
module.exports = {
    name:"help",
    aliases: ["hlp","hel","elp"],
    execute: async function(message, args, client, user) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Help Commands")
        .addFields({
            name: "+helpvouch",
            value: "Sends all Vouch Commands!",
            inline: true
        },
        {
            name: "helpmod",
            value: "Sends all Mod Commands!",
            inline: true
        },
        {
            name: "helpfun",
            value: "Sends all Fun Commands!",
            inline: true
        })
        .setTimestamp()
        .setColor("BLUE")
        message.channel.send(embed)
    }
}