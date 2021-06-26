const Discord = require('discord.js')
var Scraper = require('images-scraper');
module.exports = {
    name: "image",
    execute: async function(message, args, client) {
        const query = args.join(' ')
        console.log(await  image_finder.find(query))
    }
}