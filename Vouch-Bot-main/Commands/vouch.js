const Discord = require('discord.js')

module.exports = {
    name: "vouch",
    description: "Vouch for a user",
    aliases: ['upvote', "rep"],
    execute: async function (message, args, client, user) {
        let vouchUser = await getUser(args[0], client)
        let reason = args.slice(1).join(" ")
        const vouch = new Discord.MessageEmbed()
        .setTitle("No valid user!")
        .setDescription("Please enter a valid user!")
        .setTimestamp()
        if(!vouchUser) return message.channel.send(vouch)
        const r = new Discord.MessageEmbed()
        .setTitle("No Reason!")
        .setDescription("Please enter a reason!")
        .setTimestamp()
        if(!reason) return message.channel.send(r)
        user(vouchUser)
        const e = new Discord.MessageEmbed()
        .setTitle("Already Vouched!")
        .setDescription("You have already vouched this user!")
        .setTimestamp()
        if(client.vouches.get(message.author.id).vouchedFor.includes(vouchUser.id)) return message.channel.send(e)
        client.vouches.push(vouchUser.id, {
            author: message.author.id,
            time: new Date().toLocaleDateString(),
            reason: reason
        }, "upvotes")
        client.vouches.push(message.author.id, vouchUser.id, "vouchedFor")
        
        return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Vouched")
            .setDescription(`You have vouched for **${vouchUser.tag}**.`)
            .setColor('GREEN')
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
            )
    }
}

let getUser = async function(search, client) {
    let userRegex = /^<@!?(\d+)>$/
    let user = null;
    if (!search || typeof search !== "string") return;
    if (search.match(userRegex)) {
      const id = search.match(userRegex)[1];
      user = client.users.fetch(id).catch(() => {});
      if (user) return user;
    }
    user = await client.users.fetch(search).catch(() => {});
    return user;
}