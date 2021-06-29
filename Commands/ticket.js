const Discord = require('discord.js')
module.exports = {
    name:"ticket",
    async execute(message, args, client, user, guild) {
        const channel = await guild.channels.create(`ticket${message.author.id}`);

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
            SEND_IMAGE: true,
        });
        await channel.send(
          new Discord.MessageEmbed()
          .setTitle("Ticket Created!")
          .setDescription("test")
        )
    }
}//123