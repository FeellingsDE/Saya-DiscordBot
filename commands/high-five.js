const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("you can't high-five nobody")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} You got a high-five from ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: "https://i.imgur.com/7BJ6gfM.gif"
                    }
                }
            })
}
module.exports.config = {
    name: "High-Five",
    usage: "h.high-five",
    accessableby: "Members"
}