const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'บอส') {
      msg.reply('ต้องการดูตารางเกิดบอสเพราะแม้งจำไม่ได้', {files: [
        "https://cdn.discordapp.com/attachments/545626268675211274/580625762080522241/unknown.png"
        ]
    });

    }
});

client.login(auth.token);
