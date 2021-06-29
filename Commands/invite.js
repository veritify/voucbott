const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name:"invite",
    execute: async function(message, args, client, user) {
        let bicon = client.user.displayAvatarURL;
        let inviteEmbed = new Discord.MessageEmbed()
        .setDescription("[**Invite**](https://discord.com/api/oauth2/authorize?client_id=858086669596622878&permissions=0&scope=bot)")
        .setColor("#00ff00")
        .setThumbnail(bicon)
        .addField("Use this invite to invite the bot in your server!", "https://discord.com/api/oauth2/authorize?client_id=858086669596622878&permissions=0&scope=bot")
       
        message.channel.send(inviteEmbed);
        message.delete();
    }
}