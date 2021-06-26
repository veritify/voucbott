const Discord = require('discord.js')
module.exports = {
    name:"help",
    aliases: ["helps", "hel", "Help", "HELP"],
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(message, args, client, user) {
        const embed = new Discord.MessageEmbed()
        .setTitle("**Commands**")
        .setDescription("```+ping - Sends Pong! \n +vouch (user) (reason) - Vouches mentioned person \n +downvote (user) (reason) - Downvotes mentioned user.\n+reputation (user) - Sends amount of downvotes and vouches they have. \n +REP, +UPVOTE AND +VOUCH ALL WORK AS A VOUCH!```")
        .setTimestamp()
        message.channel.send(embed)
    }
}