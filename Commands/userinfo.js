const Discord = require('discord.js')
module.exports = {
    name:"userinfo",
    aliases: ["info", "whois"],
    description:"A simple ping pong command",
    aliases: [],
    execute: async function(client,message, args) {
        let user = args[0]

        let status;
        switch(user.presence.status){
            case "online":
                status = "online";
                break;
            case "dnd":
                status = "dnd";
                break;
            case "idle":
                status = "idle";
                break;
            case "online":
                status = "offline";
                break;
        }
        const e = new Discord.MessageEmbed()
        .setTitle(`${user.user.username} stats`)
        .setColor("BLUE")
        .setThumbnail(user.user.displayAvatarURL())
        .addFields(
            {
                name: "Name: ",
                value: user.user.username, 
                inline: true
            },
            {
                name: "Discriminator: ",
                value: user.user.discriminator,
                inline: true
            },
            {
                name: "ID: ",
                value: user.user.id,
                inline: true
            },
            {
                name: "Current Status: ",
                value: status,
                inline: true
            }
        )
        await message.channel.send(e)
    }
}//123123