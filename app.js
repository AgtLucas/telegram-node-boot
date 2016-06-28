var TelegramBot = require('node-telegram-bot-api');

var token = "227112695:AAH79igYIRCOC_Oe6LMKxAPRik78o921jfY";

var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
  //console.info(msg);
});

// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  console.info('From: ' + chatId + ' [' + msg.text + ']');
  bot.sendMessage(chatId, msg.text);
});