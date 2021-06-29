const Discord = require('discord.js')
let giveMeAJoke = require('give-me-a-joke');;
const axios = require("axios")
module.exports = {
    name:"joke",
    execute: async function(message, args, client, user) {
        giveMeAJoke.getRandomDadJoke(function(joke){
            message.channel.send(joke)
        })
    }

    }
