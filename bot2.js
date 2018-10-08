const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


client.on('ready', () => {
    let channel_id = "485537644147638311";
    var channel = client.channels.get(channel_id);
    if(channel.type == 'voice') {
        channel.join();
    } else {
        console.log('...');
    }
});

client.login(process.env.BOT2_TOKEN);
