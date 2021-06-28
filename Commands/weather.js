const Discord = require('discord.js')
const weather = require('weather-js')
module.exports = {
    name:"weather",
    aliases: [],
    execute: async function(message, args, client, user) {
        weather.find({search: args.join(" "), degreeType: "C"}, function(error,result) {
            if(error)return message.channel.send(error);
            if(!args[0])return message.channel.send(
                new Discord.MessageEmbed()

                .setTitle("Error!")
                .setDescription("Please specify a location!")
                .setColor("BLUE")
                .setTimestamp()
            )
            if(result === undefined || result.length === 0)return message.channel.send(new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle("Error!")
            .setDescription("Invalid Location!")
            );
            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setTitle(`Weather for ${current.observationpoint}`)
            .addFields({
                name: "Timezone",
                value: `UTC${location.timezone}`,
                inline: true
            },
            {
                name: "Degree Type",
                value: "Celcius",
                inline: true
            },
            {
                name: "Temperature",
                value: current.temperature,
                inline: true
            },
            {
                name: "Wind",
                value: current.winddisplay,
                inline: true
            },
            {
                name: "Feels Like",
                value: current.feelslike,
                inline: true
            },
            {
                name: "Humidity",
                value: current.humidity = "%",
                inline: true
            }
            )
            .setTimestamp()
            .setColor("BLUE")
            message.channel.send(embed)
        })
    }
}