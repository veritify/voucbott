const Discord = require('discord.js')
const client = new Discord.Client();
module.exports = {
    name: "mute",
    description: 'Mutes a member',
    execute(message, args) {
        message.delete()
        if (message.member.roles.cache.some(r => r.name === "Staff")) {
            const target = message.mentions.users.first();
            if (target) {
                const logch = client.channels.cache.find(channel => channel.id === '845717945941360640')
                let logEm = new Discord.MessageEmbed()
                .setTitle("Muted")
                .setDescription(`<@${message.author.id}> got muted`)
                .setColor('#00000')
               .setTimestamp()
                logch.send(logEm)
                let memberrole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muted = message.guild.roles.cache.find(role => role.name === 'Muted');
                let memberTarget = message.guild.members.cache.get(target.id);
                if (!args[1]) {
                    memberTarget.roles.remove(memberrole.id);
                    memberTarget.roles.add(muted.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted indefinitely`)
                    return
                }
                memberTarget.roles.remove(memberrole.id);
                memberTarget.roles.add(muted.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
                setTimeout(function () {
                    memberTarget.roles.remove(muted.id);
                    memberTarget.roles.add(memberrole.id);

                }), ms(args[1]);
            } else {
                message.channel.send("Cannot find that member.")
            }
        }else{
            message.channel.send("You do not have permission to use this.")
        }
    }
}