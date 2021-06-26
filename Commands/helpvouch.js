const Discord = require('discord.js')
module.exports = {
    name:"helpvouch",
    aliases: ["hlpvouch", "helvouch"],
    description:"A simple ping pong command",
    execute: async function(message, args, client, user) {
        const embed = new Discord.MessageEmbed()
        .setTitle("**All Vouch Commands**")
        .addFields(
        {
            name: "+vouch (user) (reason)",
            value: "Vouches mentioned user.",
            inline: true
        },
        {
            name: "+rep (user) (reason)",
            value: "Vouches mentioned user.",
            inline: true
        },
        {
            name: "downvote (user) (reason)",
            value: "Downvotes mentioned user.",
            inline: true
        },
        )
        .setTimestamp()
        .setColor("BLUE")
        message.channel.send(embed)
    }
}




//+ban (user) (reason) - Bans mentioned member. 
//+kick (user) (reason) - Kicks mentioned member. 
//+mute (user) (reason) - Mutes mentioned member. 
//+slowmode (amount) - Changes slowmode for that channel. 
//+clear (amount) - Clears (amount) of messages.