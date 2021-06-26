const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
const embed = require('discord.js')
module.exports = {
    name: "kick",
    description: 'Kicks a member',
    execute(message, args){
        message.delete()
        if(message.member.roles.cache.some(r => r.name ==="Staff")){
        const member = message.mentions.users.first();
        if(member){
        const memberTarget = message.guild.members.cache.get(member.id)
        const memberTargetname = message.guild.members.cache.get(member.name)
        memberTarget.kick()
        const embed = new Discord.MessageEmbed()
        .setDescription("Kicked <@"+ memberTarget + '>')
        message.channel.send(embed)
        const logch = client.channels.cache.find(channel => channel.id === '845717945941360640')
        let logEm = new Discord.MessageEmbed()
        .setTitle("Kicked")
        .setDescription(`<@${message.author.id}> got kicked`)
        .setColor('#00000')
       .setTimestamp()
        logch.send(logEm)
            }else{
            message.author.send("You need to mention someone.")
        }
    }else{
        message.channel.send('<@'+message.author.id +'>, You dont have permission to use this command')
    }
}
}