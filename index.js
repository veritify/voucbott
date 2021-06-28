const Discord = require('discord.js'),
    Enmap = require('enmap')

const client = new Discord.Client(),
    {
        readdirSync
    } = require('fs'),
    commandFiles = readdirSync('./Commands').filter(c => c.endsWith('.js')),
    config = require('./config.json')
const axios = require("axios")
client.vouches = new Enmap({
    name: "vouches",
    autoFetch: true,
    fetchAll: true,
    ensureProps: true
})

client.commands = new Discord.Collection()

for (let file of commandFiles) {
    let command = require(`./Commands/${file}`)
    client.commands.set(command.name, command)
}

client.on('ready', () => {
    console.clear()
    console.log(`${client.user.tag} is online!`)
    client.user.setActivity(`+help | I am in ${client.guilds.cache.size} servers!`)
    const channel = client.channels.cache.find(channel => channel.name === "Speed")
    channel.join()
})



client.on('message', async message => {
    let user = (user) => {
        return client.vouches.ensure(user.id, {
            upvotes: [
            ],
            downvotes: [
            ],//123
            vouchedFor: [],
            downvotedFor: []
        })
    }
    let a = user(message.author)
    if (message.author.bot || !message.content.startsWith(config.prefix)) return;

    let args = message.content.trim().slice(config.prefix.length).split(/\s+/g)
    let commandName = args.shift().toLowerCase()

    let command = client.commands.get(commandName) || client.commands.find(c => c.aliases && c.aliases.includes(commandName))
    if (!command) return;

    try {
        await command.execute(message, args,client, user)
    } catch (e) {
        console.log(e)
    }

})

client.login(config.token)//123