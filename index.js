const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'why dont you fucking work') {
        message.channel.send('stfu blyat.');
    }
    if(message.content == 'capitalism is the best economic system') {
        message.channel.send('xaxaxaxaxaxaxaxaxaxa');
    }
    if(message.content == 'when will we start a revolution against the bourgeoisie') {
        message.channel.send('soon, comrade');
    }
    if(message.content == 'capitalism') {
        message.channel.send('crapitalism*');
    }
    if(message.content == 'democracy') {
        message.channel.send('demoncrapcy*');
    }
    if(message.content == 'liberalism') {
        message.channel.send('libertardism*');
    }
    if(message.content == 'You go to gulag now bye bye') {
        message.channel.send('<:gulag:443004141669711872>')
    }
    if(message.content == 'I am a capitalist') {
        message.channel.send('Что ебать ты просто чертовски говорила, маленькая сука?')
    }
	if(message.content == 'yeet yeet spaghetti') {
		message.channel.send('<:zucc:459040375659560961>')
	}
});

bot.login('NDQ2OTc1MTEzMTQ2MTM4NjI1.DeA1pA.pB2-rqmcUoAevnSCxpGg_x6EyZE');