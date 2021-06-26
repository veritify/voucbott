const Discord = require('discord.js')
const embed = require('discord.js')
module.exports = {
    name: "ban",
    aliases: ["bans", "Ban", "BAn", "BAN"],
    description: 'Bans a member',
    execute(message, args){
        message.delete()
        if(message.member.roles.cache.some(r => r.name ==="Staff")){
        const member = message.mentions.users.first();
        if(member){
        const memberTarget = message.guild.members.cache.get(member.id)
        const memberTargetname = message.guild.members.cache.get(member.name)
        memberTarget.ban()
        const embed = new Discord.MessageEmbed()
        .setDescription("Banned <@"+ memberTarget + '>')
        message.channel.send(embed)
        const logch = client.channels.cache.find(channel => channel.id === '845717945941360640')
        let logEm = new Discord.MessageEmbed()
        .setTitle("Banned")
        .setDescription(`<@${message.author.id}> got banned`)
        .setColor('#00000')
       .setTimestamp()
        logch.send(logEm)
            }else{
                const e = new Discord.MessageEmbed()
                .setDescription("You need to mention someone!")
                .setTimestamp()
                .setAuthor(message.author.username)
                message.channel.send(e)
        }
    }else{
        message.channel.send('<@'+message.author.id +'>, You dont have permission to use this command')
    }
}
}