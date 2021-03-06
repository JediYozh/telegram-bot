import { helpME } from './responses';
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/helpme/, (msg: any, match: Array<Object>) => {
  bot.sendMessage(msg.chat.id, helpME(msg.chat.first_name));
});
