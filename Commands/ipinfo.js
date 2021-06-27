const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name:"ipinfo",
    execute: async function(message, args, client, user) {
        fetch(`http://ip-api.com/json/${args[0]}`)
        .then(res => res.json())
        .then(async json => {
            const embed = new Discord.MessageEmbed()
            .setTitle(json.query)
            .addFields(
                {
                    name: "Status",
                    value: json.status,
                    inline: true
                },
                {
                    name: "Country",
                    value: json.country,
                    inline: true
                },
                {
                    name: "Region",
                    value: json.region,
                    inline: true
                },
                {
                    name: "Region Name",
                    value: json.regionName,
                    inline: true
                },
                {
                    name: "City",
                    value: json.city,
                    inline: true
                },
                {
                    name: "ZIP",
                    value: json.zip,
                    inline: true
                },

                {
                    name: "Latitude - Longitude",
                    value: `Latitude - ${lat} | Longitude - ${lon}`,
                    inline:true
                },
                {
                    name: "Timezone",
                    value: json.timezone,
                    inline: true
                }
            )
            .setColor("BLUE")
            .setFooter(`Subreddit: ${json.subreddit} | Link: ${json.postLink}`);
            let msg = await message.channel.send(
                new Discord.MessageEmbed()
                .setTitle("Fetching...")
                .setDescription("Fetching you a meme!")
                .setColor("BLUE")
                .setTimestamp()
            )
            msg.edit(embed)
        })
    }
}//123