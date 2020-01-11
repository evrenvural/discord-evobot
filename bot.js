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

client.login('NjY1NjIxNDU3NzI3OTE0MDI0.XhoSag.ln6-HTAPUpYm_Ms9sovE9wS_KRo')
.then(
  msg => console.log("Olumlu " + msg)
)
.catch(
  err => console.log("Hatalı " + err)
);