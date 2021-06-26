const Discord = require('discord.js')
const  image_finder  =  require("image-search-engine")
module.exports = {
    name: "image",
    execute: async function(message, args, client) {
        const query = args.join(' ')
        console.log(await  image_finder.find(query))
    }
}