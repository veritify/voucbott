const Discord = require('discord.js')
const minecraft = require('minecraft-information')
module.exports = {
    name:"mcinfo",
    execute: async function(message, args, client, user) {
        if(!args[0]){
            message.channel.send("Please enter your minecraft username!")
        }
        const {data} = minecraft.profile(args[0])
        message.channel.send({files:[data]})
    }
}