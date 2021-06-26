const Discord = require('discord.js')
module.exports = {
    name:"helpvouch",
    aliases: ["hlpvouch", "helvouch"],
    description:"A simple ping pong command",
    execute: async function(message, args, client, user) {
        const embed = new Discord.MessageEmbed()
        .setTitle("**Commands**")
        .addFields({
            name: "+ping",
            value: "Sends Pong to you!",
            inline: true
        },
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
        {

        }
        )
        .setTimestamp()
        message.channel.send(embed)
    }
}





////+ping - Sends Pong! 
//+vouch/+rep/+upvote (user) (reason) - Vouches mentioned person 
//+downvote (user) (reason) - Downvotes mentioned user.
//+reputation/+reps (user) - Sends amount of downvotes and vouches they have. 
//+ban (user) (reason) - Bans mentioned member. 
//+kick (user) (reason) - Kicks mentioned member. 
//+mute (user) (reason) - Mutes mentioned member. 
//+slowmode (amount) - Changes slowmode for that channel. 
//+clear (amount) - Clears (amount) of messages.