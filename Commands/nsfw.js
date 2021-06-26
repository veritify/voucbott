const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
    name:"nsfw",
    aliases: ["porn"],
    execute: async function(message, args, client, user) {
        const op = args.join(" ")
        if(!op) {
            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle("You need to pick one of these!")
                .setDescription("Anal, 4K, Ass, GoneWild, Porngif, pussy, Thigh, Boobs, Hentai Ass, Hentai, Hentai Midriff, Hentai Thigh, Erokemo, Kitsune, Lewd, Neko Feet, Neko Tits, Solo, Wallpaper!")
                .setTimestamp()
                .setColor("BLUE")
                )

        }else if(op === "Anal" || "anal"){
            const image = await nsfw.anal();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Anal Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "4k" || "4K" || "fourk"){
            const image = await nsfw.fourk();
            const embed = new Discord.MessageEmbed()
            .setTitle(`4k Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "ass" || "Ass" || "ASS"){
            const image = await nsfw.ass();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Ass Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "gonewild" || "GoneWild" || "GoneWild"){
            const image = await nsfw.gonewild();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Gone Wild Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "Porngif" || "porngif" || "pornGIF"){
            const image = await nsfw.pgif();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Ass Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "pussy" || "Pussy" || "PUSSY"){
            const image = await nsfw.pussy();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Pussy Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }
    }
}//123