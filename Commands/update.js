const Discord = require('discord.js');
module.exports = {
    name: "update",
    description: 'Sends Discord Server',
    execute(message, args){
        const {guild} = message
        const {name,region,memberCount, owner} = guild
        const icon = guild.iconURL()
       // message.channel.send(`Guild Name: ${name} \n Region: ${region} \nMember Count: ${memberCount} \nServer Owner: ${owner.user.tag}`)
       const msg = message.channel.send(`Guild Name: ${name} \n Region: ${region} \nMember Count: ${memberCount} \nServer Owner: ${owner.user.tag}`);
        msg

    }
}