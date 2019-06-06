const Discord = require('discord.js');
const client = new Discord.Client();

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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
