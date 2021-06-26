const Discord = require('discord.js')
const embed = require('discord.js')


module.exports = {
    name: 'warn',
    description: 'Warns the mentioned user',
    async execute(message, args) {
        if(message.author.hasPermission("BAN_MEMBERS")){
        args.shift()
        const target = message.mentions.users.first()
        if(!target){
            const emb  =new Discord.MessageEmbed()
            .setDescription("You need to mention someone!")
            .setTimestamp()
            .setAuthor(message.author.username)
            message.channel.send(emb)
            return
        }
        const guild = message.guild
        const userid = message.member.id
        console.log(userid)
        const reason = args.join(" ")
        const embed = new Discord.MessageEmbed()
        .setTitle(`${target}, You have been warned.`)
        .setDescription(`You have been warned by ${message.author.username}!\n Reason : ${reason} \n Server: ${guild.name}`)
        .setTimestamp()
        message.channel.send(embed)
        let logEm = new Discord.MessageEmbed()
        .setDescription(`${message.author.username} has warned ${target} for ${reason}`)
        .setColor('#00000')
       .setTimestamp()
        message.author.send(logEm)
    }else{
        message.reply(" You do not have permission to use this!")
    }
    }
}