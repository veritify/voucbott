const Discord = require('discord.js');
module.exports = {
    name: "serverinfo",
    description: 'Sends Discord Server',
    execute(message, args){
        const {guild} = message
        const {name,region,memberCount, owner} = guild
        const icon = guild.iconURL()
       // message.channel.send(`Guild Name: ${name} \n Region: ${region} \nMember Count: ${memberCount} \nServer Owner: ${owner.user.tag}`)
       const embed = new Discord.MessageEmbed()
       .setTitle("Server Info!")
       .addFields(
           {
               name: "Guild Name",
               value: name,
               inline: true
           },
           {
               name:"Region",
               value: region,
               inline: true
           },
           {
               name:"Member Count",
               value: memberCount,
               inline: true
           },
           {
               name:"Server Owner",
               value: owner.user.tag, 
               inline: true
           }
       )
       const msg = message.channel.send(embed);
        msg

    }
}