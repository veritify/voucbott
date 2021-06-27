const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name:"meme",
    execute: async function(message, args, client, user) {
        const {f} = await fetch('https://meme-api.herokuapp.com/gimme')
        const link = f.url
        const subr = f.subreddit
        const title = f.title
        const nsfw = f.nsfw
        const spoiler = f.spoiler
        const upvotes = f.ups

        const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setImage(link)
        .setFooter(`Subreddit: ${subr} | NSFW: ${nsfw} | Spoiler: ${spoiler} | Upvotes: ${upvotes}`)
        message.channel.send(embed)
    }
}