const Discord = require('discord.js')
const  image_finder  =  require("image-search-engine")
module.exports = {
    name: "image",
    execute: async function(message, args, client) {
        const query = args.join(' ')
        const im = await  image_finder.find(query)
        message.channel.send(im)
    }
}