const Discord = require('discord.js')
module.exports = {
    name:"lock",
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(message, args, client, user) {
    
   if(!message.member.hasPermission("MANAGE_CHANNELS"))
return message.channel.send(
new Discord.MessageEmbed()
.setTitle("**You don't have enough permissions to use this command.**")
.setColor(0xcff9ff)
.setImage("https://cdn.discordapp.com/attachments/836044564158611486/836058814176034816/unknown.png")
)  
  message.channel.updateOverwrite(message.channel.guild.roles.everyone, {SEND_MESSAGES: false });
message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Channel Locked**`)
.setColor("BLUE")
.setFooter(message.guild.name, message.guild.iconURL({
dynamic: true
}))
)
}
}