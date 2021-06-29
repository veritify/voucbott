const Discord = require('discord.js')
module.exports = {
    name:"ticket",
    async execute: async function(message, args, client, user) {
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
        const reactionMessage = await channel.send("Thank you for contacting support!");
        try {
            await reactionMessage.react("🔒");
            await reactionMessage.react("⛔");
          } catch (err) {
            channel.send("Error sending emojis!");
            throw err;
          }

          const collector = reactionMessage.createReactionCollector(
            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
            { dispose: true }
          );
      
          collector.on("collect", (reaction, user) => {
            switch (reaction.emoji.name) {
              case "🔒":
                channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
                break;
              case "⛔":
                channel.send("Deleting this channel in 5 seconds!");
                setTimeout(() => channel.delete(), 5000);
                break;
            }
          });
      
          message.channel
            .send(`We will be right with you! ${channel}`)
            .then((msg) => {
              setTimeout(() => msg.delete(), 7000);
              setTimeout(() => message.delete(), 3000);
            })
            .catch((err) => {
              throw err;
            });
    }
}