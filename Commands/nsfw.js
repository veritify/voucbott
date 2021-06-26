const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
    name:"nsfw",
    aliases: ["porn"],
    execute: async function(message, args, client, user) {
        message.delete();
        const op = args[0]
        if(message.channel.nsfw){
        if(!op) {
            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle("Options")
                .setDescription("Anal, 4K, Ass, GoneWild, gif, pussy, thigh, boobs, hentai ass, erokemo, kitsune, lewd, nekofeet, nekotits solo, wallpaper!")
                .setTimestamp()
                .setColor("BLUE")
                ).then(msg => msg.delete({timeout: 12000}))
                return
        }
        if(message.content.includes("test")){
            message.channel.send("test :)")
        }else if(message.content.includes("anal")){
            const image = await nsfw.anal();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Anal Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("4k")){
            const image = await nsfw.fourk();
            const embed = new Discord.MessageEmbed()
            .setTitle(`4k Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("ass")){
            const image = await nsfw.ass();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Ass Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("gonewild")){
            const image = await nsfw.gonewild();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Gone Wild Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("gif")){
            const image = await nsfw.pgif();
            const embed = new Discord.MessageEmbed()
            .setTitle(`GIF`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("pussy")){
            const image = await nsfw.pussy();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Pussy Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("thigh")){
            const image = await nsfw.thigh();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Thigh Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("boob")){
            const image = await nsfw.boobs();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Boobs Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("hentai")){
            const image = await nsfw.hentai();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Hentai Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(op === message.content.includes("erokemo")){
            const image = await nsfw.erokemo();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Erokemo Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("kitsune")){
            const image = await nsfw.kitsune();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Kitsune Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("lewd")){
            const image = await nsfw.lewd();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Lewd Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("nekofeet")){
            const image = await nsfw.nekofeet();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Neko Feet Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("nekotits")){
            const image = await nsfw.nekotits();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Neko Tits Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("solo")){
            const image = await nsfw.solo();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Solo Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else if(message.content.includes("wallpaper")){
            const image = await nsfw.wallpaper();
            const embed = new Discord.MessageEmbed()
            .setTitle(`Wallpaper Image`)
            .setColor("BLUE")
            .setImage(image);
            message.channel.send(embed).then(msg => msg.delete({timeout: 12000}))
        }else{
            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle("Error!")
                .setDescription("That is not an option!")
                .setColor("BLUE")
                .setTimestamp()
            ).then(msg => msg.delete({timeout: 12000}))
        }
    }else{
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription("This is not a NSFW channel!")
            .setColor("BLUE")
            .setTimestamp()
        ).then(msg => msg.delete({timeout: 12000}))
    }
    }
}