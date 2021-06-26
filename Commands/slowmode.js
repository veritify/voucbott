const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    description: 'Sets SlowMode for a Channel',
async execute(message, args){
    if (!message.member.hasPermission("BAN_MEMBERS")){
        messages.channel.send(new Discord.MessageEmbed() .setDescription('You Cannot do that, Missing Permissions') .setColor('RED'))
        return;
    }

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed() .setDescription('You must pick and amount of time!') .setColor('BLACK'));
    if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed() .setDescription('Please type a real number!') .setColor('BLACK'));
    if (args[0] > 21600 || args[0] < 1) return message.channel.send(new Discord.MessageEmbed() .setDescription('Number must be between 1 - 21600') .setColor('BLACK'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        message.channel.send(new Discord.MessageEmbed() .setDescription(`Slow Mode set to ${args[0]}`) .setColor('RED'))
        return;

        message.channel.send(new Discord.MessageEmbed() .setDescription(`Slow Mode set to ${args[0]}`) .setColor('RED'))

    .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
    })
}
}