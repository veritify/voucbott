const Discord = require('discord.js')
module.exports = {
    name:"helpmod",
    aliases: ["hlpmod", "elpmod", "helmod"],
    execute: async function(message, args, client, user) {
        const embed = new Discord.MessageEmbed()
        .setTitle("All Mod Commands")
        .addFields(
            {
                name: "+ban (user) (reason)",
                value: "Bans mentioned user.",
                inline: true
            },
            {
                name: "+kick (user) (reason)",
                value: "Kicks mentioned user.",
                inline: true
            },
            {
                name: "+mute (user)",
                value: "Mutes mentioned user.",
                inline: true
            },
            {
                name: "+slowmode (amount)",
                value: "Changes slowmode for the channel the command was run in.",
                inline: true
            },
            {
                name: "+clear (amount)",
                value: "Clears the amount of messages(up to 100).",
                inline: true
            }
        )
        message.channel.send(embed)
    }
}


//+ban (user) (reason) - Bans mentioned member. 
//+kick (user) (reason) - Kicks mentioned member. 
//+mute (user) (reason) - Mutes mentioned member. 
//+slowmode (amount) - Changes slowmode for that channel. 
//+clear (amount) - Clears (amount) of messages.
