const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name:"meme",
    execute: async function(message, args, client, user) {
        fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(json => {
            const embed = new Discord.MessageEmbed()
            .setTitle(json.title)
            .setImage(json.url)
            .setColor("BLUE")
            .setFooter(`Subreddit: ${json.subreddit} | Link: ${json.postLink}`);
            let msg = await message.channel.send(
                new Discord.MessageEmbed()
                .setTitle("Fetching...")
                .setDescription("Fetching you a meme!")
                .setColor("BLUE")
                .setTimestamp()
            )
            msg.edit(embed)
        })
    }
}