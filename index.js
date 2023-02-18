const telegramBot = require('node-telegram-bot-api');
const { getBarSuggestion, getBarsCount } = require('./src/commands');
const { getUrl } = require('./src/utils');

const BOT_NAME = 'amsxxx_bot';
const token = process.env.TOKEN;
const bot = new telegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatID = msg.chat.id;
  const clearMessage = msg.text.replace(`@${BOT_NAME}`, '');
  console.log(clearMessage);

  switch (clearMessage) {
    case '/suggest':
      const bar = getBarSuggestion();
      bot.sendMessage(chatID, `${bar.name}\n${getUrl(bar.path)}`);
      break;
    case '/count':
      bot.sendMessage(chatID, `We have ${getBarsCount()} registered bars to suggest.`);
      break;
    default:
      break;
  }
});