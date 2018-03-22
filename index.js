'use strict'
const token = process.env.KEPPANABOT_TOKEN
const TeleBot = require('telebot');
const bot = new TeleBot(token);

const destGroupId = parseInt(process.env.KEPPANABOT_DEST_GROUP, 10);

/*bot.on('/jii', msg => {
  console.log(JSON.stringify(msg, null, 2))
  let chatId = msg.from.id;
  console.log(chatId);
  let firstName = msg.from.first_name;
  let reply = msg.message_id;
  let text = msg.text;
  if (text === 'Hello, World!') {
    text = 'Ime Slaikkuu Joonas';
  }
  text = "Hello from KeppanaBot"
  return bot.sendMessage(chatId, text);
});*/

bot.on('text', msg => {
  if (msg.chat) {
    console.log(msg.chat.id)
  }
  return msg.reply.text('Jii!')
  let text = msg.text;
  if (text === 'Hello, World!') {
    text = `Ime Slaikkuu ${msg.from.first_name}`;
    return msg.reply.text(text)
  }
  else {
    return bot.sendMessage(destGroupId, text);
  }
});

bot.on('sticker', msg => {
  if (!msg.chat) {
    return msg.reply.text('Sori ei stickereitä')
  }
  else {
    console.log(msg.chat.id)
  }
})

bot.on('photo', msg => {
  return msg.reply.text('Sori ei kuvii')
})


console.log('Listening')
bot.connect();
