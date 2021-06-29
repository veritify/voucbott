const Discord = require('discord.js')
module.exports = {
    name:"help",
    aliases: ["hlp","hel","elp"],
    execute: async function(message, args, client, user) {
        op = args[0]
        if(!op){
        const embed = new Discord.MessageEmbed()
        .setTitle("Help Commands")
        .addFields({
            name: "+help vouch",
            value: "Sends all Vouch Commands!",
            inline: true
        },
        {
            name: "+help mod",
            value: "Sends all Mod Commands!",
            inline: true
        },
        {
            name: "+help fun",
            value: "Sends all Fun Commands!",
            inline: true
        },
        {
            name: "+help info",
            value: "Sends all Information Commands!",
            inline: true
        }
        )
        .setTimestamp()
        .setColor("BLUE")
        message.channel.send(embed)
    }

        if( op === "fun"){
            const embed = new Discord.MessageEmbed()
            .setTitle("All Fun Commands")
            .addFields(
                {
                    name: "+binary (decode/encode)",
                    value: "Encodes/Decodes your message",
                    inline: true
                },
                {
                    name: "+say",
                    value: "Sends back your message.",
                    inline: true
                },
                {
                    name: "+webhookinfo (webhook)",
                    value: "Sends information an a webhook.",
                    inline: true
                },
                {
                    name: "+image (content)",
                    value: "Sends an image back to you!",
                    inline: true
                },
                {
                    name: "+nsfw (option)",
                    value: "Sends an NSFW image!(only works in nsfw channels)",
                    inline: true
                },
                {
                    name: "+8ball",
                    value: "Gives you an answer to your question.",
                    inline: true
                },
                {
                    name: "+meme",
                    value: "Sends a meme to you!",
                    inline: true
                },
                {
                    name: "+ipinfo (ip)",
                    value: "Sends information on an IP.",
                    inline: true
                },
                {
                    name: "+weather (option)",
                    value: "Sends info on the wether for the option."
                }
            )
            .setColor("BLUE")
            message.channel.send(embed)
        }else if(op === "mod"){
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
                },
                {
                    name:" +lock",
                    value: "Locks the channel the command was run in.",
                    inline: true
                },
                {
                    name: "+unlock",
                    value: "Unlocks the channel the command was run in.",
                    inline: true
                },
                {
                    name:" +translate (message)", 
                    value: "Translates the message to English",
                    inline: true
                }
            )
            .setColor("BLUE")
            message.channel.send(embed)
        }else if( op === "vouch"){
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
        }else if(op === "info"){
            const embed = new Discord.MessageEmbed()
            .setTitle("All Info Commands")
            .addFields(
                {
                    name: "+serverinfo",
                    value: "Sends Server Information",
                    inline: true
                },
                {
                    name: "+membercount",
                    value: "Sends how many members are in the server.",
                    inline: true
                },
                {
                    name: "+guild",
                    value: "Sends how many guilds the bot is in.",
                    inline: true
                }
            )
            .setColor("BLUE")
            message.channel.send(embed)
        }
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Support Server")
        .setURL("https://discord.gg/9vA3CAK2Tj")
        .setColor("BLUE")
        .setTimestamp()
        )
    }
}