const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();

Music.start(client, {
  youtubeKey: 'AIzaSyAL5dbalHx8PKEjqhiu5ApTgd4ZV4aqcVw'
});

client.login(process.env.BOT_TOKEN);
