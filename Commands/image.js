const Discord = require('discord.js')
const  image_finder  =  require("image-search-engine")
module.exports = {
    name: "image",
    execute: async function(message, args, client) {
        message.delete();
        const query = args.join(' ')
        if(message.content.includes("porn" || "dick" || "pussy" || "vagina" || "std" || "sex" || "nigger" || "nigga")){
            message.channel.send("-_-")
            return
        }else{
        const im = await  image_finder.find(query, {size: "large"})
        message.reply("Here is your image!").then(msg => msg.delete({timeout: 12000}))
        message.channel.send(im).then(msg => msg.delete({timeout: 12000}))
        }
    }
}