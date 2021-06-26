const Discord = require('discord.js')
var Scraper = require('images-scraper');
module.exports = {
    name: "image",
    execute: async function(message, args, client) {
        const google = new Scraper({
            puppeteer: {
                headless: true,
            }
        })
        const image_query = args.join(' ')
        if(!image_query) return message.channel.send("Please enter an image name!");

        const image_result = await google.scrape(image_query, 1);
        message.channel.send(image_result[0].url);
    }
}