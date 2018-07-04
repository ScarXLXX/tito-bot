const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'testing this shit') {
        message.channel.send('k it works now yall niggas need to give alex some shit to make me say');
    }
});

bot.login('NDY0MTE2OTI0MjE4MDgxMjgw.Dh6SFQ.HWSJjNKYcBvBRxuhvACsL_NSw_M');