import TelegramBot from 'node-telegram-bot-api';
// replace the value below with the Telegram token you receive from @BotFather
const token = '1783837557:AAFOFLMUICIdsNnYKfudy4c8NyLebOUeoiE';
import { groupEnd } from 'console';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('polling_error', (error) => {
  console.log(error);  // => 'EFATAL'
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  console.log(msg); //
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  //const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, 'resp');
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  console.log(msg); //
  const chatId = msg.chat.id;
  const chatIdGroupTeste = '-1001326613480';

  // send a message to the chat acknowledging receipt of their message
  //const url = 'https://www.vitalatman.com.br/wp-content/uploads/2020/08/alpha-care-combo.png';
  //bot.sendPhoto(chatId, url);
  //bot.sendMessage(chatId, '🤘👏👏Descricao do produto ${link}   #OfertaBest, acesse https://ofertabest.com');

  //url = 'https://www.vitalatman.com.br/wp-content/uploads/2020/08/alpha-care-combo.png';
  //bot.sendPhoto(chatIdGroupTeste, url);
  //bot.sendMessage(chatIdGroupTeste, '🤘👏👏Descricao do produto ${link}   #OfertaBest, acesse https://ofertabest.com');

});