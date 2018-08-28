import bot from './bot';
import { helpME } from './responses';
bot.onText(/\/helpme/, (msg: any, match: Array<Object>) => {
  bot.sendMessage(msg.chat.id, helpME(msg.chat.first_name));
});
