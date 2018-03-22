const token = process.env.KEPPANABOT_TOKEN
const TeleBot = require('telebot');
const bot = new TeleBot(token);

const express = require('express')
const app = express()

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
  /*let text = msg.text;
  if (msg.chat && msg.chat.id === destGroupId) {
    text = "Laita privaviesti nii välitän tänne"
    bot.sendMessage(msg.chat.id, text)
  }
  if (text === 'Hello, World!') {
    text = `Ime Slaikkuu ${msg.from.first_name}`;
  }
  if (text === '/start') {
    return bot.sendMessage(msg.from.id, "Laita mulle normi yksityisviesti nii lähetän sen Keppanachatiin!")
  }
  if (text === '/start@KeppaNalleBot') {
    return bot.sendMessage(msg.chat.id, "Laita mulle normi yksityisviesti nii lähetän sen Keppanachatiin!")
  }
  else {
    return bot.sendMessage(destGroupId, text);
  }*/
});

bot.on('sticker', msg => {
  return msg.reply.text('Sori ei stickereitä')
})

bot.on('photo', msg => {
  return msg.reply.text('Sori ei kuvii')
})


console.log('Listening')
bot.connect();
