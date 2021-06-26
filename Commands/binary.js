const Discord = require('discord.js')
module.exports = {
    name:"binary",
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(message, args, client, user) {
        if(!args[0])return message.reply("Please specify whether you want to encode or decode.")
        const query = args.shift().toLowerCase();
        let word = args.join(" ");

        if(query === "encode"){
            if(!word) return message.reply("Please enter a word to encode")
            const { data } = await axios.get(`https://some-random-api.ml/binary?text=${encodeURIComponent(word)}`)
            message.channel.send(data.binary ?? "An error occurred!", { 
                code: "",
            })
        }else if(query === "decode"){
            if(!word) return message.reply("Please enter a code to decode")
            const { data } = await axios.get(`https://some-random-api.ml/binary?decode=${encodeURIComponent(
                word)}`)
                message.channel.send(data.text ?? "An error occurred!", { 
                    code: "",
                })
        }
    }
}