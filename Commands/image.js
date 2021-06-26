const Discord = require('discord.js')
const  image_finder  =  require("image-search-engine")
module.exports = {
    name: "image",
    execute: async function(message, args, client) {
        message.delete();
        const query = args.join(' ')
        const im = await  image_finder.find(query)
        message.reply("Here is your image! " + im).then(msg => msg.delete({timeout: 5000}))
    }
}