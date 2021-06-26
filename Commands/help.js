const Discord = require('discord.js')
module.exports = {
    name:"help",
    aliases: ["helps", "hel", "Help", "HELP"],
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(message, args, client, user) {
        const embed = new Discord.MessageEmbed()
        .setTitle("**Commands**")
        .setDescription("```+ping - Sends Pong! \n+vouch/+rep/+upvote (user) (reason) - Vouches mentioned person \n+downvote (user) (reason) - Downvotes mentioned user.\n+reputation/+reps (user) - Sends amount of downvotes and vouches they have. \n+ban (user) (reason) - Bans mentioned member. \n+kick (user) (reason) - Kicks mentioned member. \n+mute (user) (reason) - Mutes mentioned member. \n+slowmode (amount) - Changes slowmode for that channel. \n+clear (amount) - Clears (amount) of messages.```")
        .setTimestamp()
        message.channel.send(embed)
    }
}