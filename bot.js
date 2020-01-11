const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'evobot') {
    msg.reply('Hello World!');
  }
});

client.login('NjY1NTg4MzAwMDQzNjQ5MDY1.XhoQPA.XY7g8NW8n4MQVTwBhfH5JNaEVdY')
.then(
  msg => console.log("Olumlu " + msg)
)
.catch(
  err => console.log("Hatalı " + err)
);