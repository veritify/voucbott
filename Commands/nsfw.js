const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
    name:"nsfw",
    aliases: ["porn"],
    execute: async function(message, args, client, user) {
        const op = args[0]
        if(message.channel.nsfw){
        if(!op) {
            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle("You need to pick one of these!")
                .setDescription("Anal, 4K, Ass, GoneWild, Porngif, pussy, Thigh, Boobs, Hentai Ass, Hentai, Hentai Midriff, Hentai Thigh, Erokemo, Kitsune, Lewd, Neko Feet, Neko Tits, Solo, Wallpaper!")
                .setTimestamp()
                .setColor("BLUE")
                )
                return
        }
        if(op === "Anal" || "anal"){
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
        }else if(op === "thigh" || "Thigh" || "THIGH"){
            const image = await nsfw.thigh();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Thigh Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "Boobs" || "boobs" || "boob" || "Boob"){
            const image = await nsfw.boobs();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Boobs Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "hentaiass" || "HentaiAss" || "Hentaiass" || "HENTAIASS"){
            const image = await nsfw.hentaiass();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Hentai Ass Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "Hentai" || "hentai" || "HENTAI" || "hentaI"){
            const image = await nsfw.hentai();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Hentai Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "HentaiMidriff" || "hentaimidriff" || "HENTAIMIDRIFF" || "Hentamidriff"){
            const image = await nsfw.hmidriff();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Hentai Midriff Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "HentaiThigh" || "hentaithigh" || "HENTAIthigh" || "HENTAITHIGH"){
            const image = await nsfw.hentaithigh();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Hentai Thigh Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "Erokemo" || "erokemo" || "EROKEMO" || "ERokemo"){
            const image = await nsfw.erokemo();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Erokemo Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "Kitsune" || "kitsune" || "KITSUNE" || "KItsune"){
            const image = await nsfw.kitsune();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Kitsune Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "Lewd" || "lewD" || "LEWD" || "lewd"){
            const image = await nsfw.lewd();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Lewd Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "NekoFeet" || "nekofeet" || "NEKOFEET" || "nekoFeet"){
            const image = await nsfw.nekofeet();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Neko Feet Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "NekoPussy" || "nekopussy" || "NEKOPUSSY" || "nekoPussy"){
            const image = await nsfw.nekopussy();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Neko Pussy Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "NekoTits" || "nekotits" || "NEKOTITS" || "nekotit"){
            const image = await nsfw.nekotits();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Neko Tits Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "Solo" || "solo" || "SOLO" || "soLO"){
            const image = await nsfw.solo();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Solo Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else if(op === "Wallpaper" || "wallpaper" || "WALLPAPER" || "wallPaper"){
            const image = await nsfw.wallpaper();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Wallpaper Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed);
        }else{
            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle("Error!")
                .setDescription("That is not an option!")
                .setColor("BLUE")
                .setTimestamp()
            )
        }
    }else{
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription("This is not a NSFW channel!")
            .setColor("BLUE")
            .setTimestamp()
        )
    }
    }
}