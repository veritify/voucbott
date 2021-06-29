const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name:"morse",
    execute: async function(message, args, client, user) {
        let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
        morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
        text = args.join(" ").toUpperCase();
           if (!text) return message.channel.send('Place a text or a morse code to be encoded or decoded.') // but you can change the answer :)

    while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
        text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
    }
    if (text.startsWith(".") || text.startsWith("-")) {
        text = text.split(" ");
        let length = text.length;
        for (i = 0; i < length; i++) {
            text[i] = alpha[morse.indexOf(text[i])];
        }
        text = text.join("");
    } else {
        text = text.split("");
        let length = text.length;
        for (i = 0; i < length; i++) {
            text [i] = morse[alpha.indexOf(text[i])];
        }
        text = text.join(" ");
    }
    return message.channel.send("```"+text+"```");

    }
}