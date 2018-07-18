const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is running!');
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
		if (command === 'ping') {

		message.channel.send('Pong.');

	}
	
	if (command === 'pong') {
		
		message.channel.send('ping');
		
		}	
	
});

client.login(token);

