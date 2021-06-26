module.exports = {
    name: "clear",
    aliases: ["nuke"],
    description: 'Clears the channels messages',
    async execute(message, args){
        if(message.member.roles.cache.some(r => r.name ==="Staff")){
        if(!args[0])return message.channel.send("Enter an amount.")
        if(isNaN(args[0]))return message.channel.send("Enter a number.")
        if(args[0]< 1)return message.channel.send("Must be above 1 message.")
        if(args[0]> 100)return message.channel.send("Enter an amount under 100")
    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages);
    })
    const logch = client.channels.cache.find(channel => channel.id === '845717945941360640')
    let logEm = new Discord.MessageEmbed()
    .setTitle("Cleared")
    .setDescription(`<@${message.author.id}> cleared ${message.channel}`)
    .setColor('#00000')
   .setTimestamp()
    logch.send(logEm)
    }else{
        message.channel.send("You do not have permission to use this command!")
    }    
    }
}