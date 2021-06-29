const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name:"dog",
    execute: async function(message, args, client, user) {
        const { body } = await axios.get('https://random.dog/woof.json');
        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setImage(body.url);
        message.channel.send(embed)
    }
}