const Discord = require("discord.js");
const urban = require("urban");

module.exports = {
    name:"binary",
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(message, args, client, user) {
    if(args.length < 1) return message.reply("Please enter something!");
    let XD = args.join(" "); 

    urban(XD).first(json => {
        if(!json) return message.reply("No results found!")
        let urbEmbed = new Discord.MessageEmbed()
        .setColor("00ff00")
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by: ${json.author}`);

        message.channel.send(urbEmbed)
    });


    }
}