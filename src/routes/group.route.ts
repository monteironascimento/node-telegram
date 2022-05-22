import TelegramBot from 'node-telegram-bot-api';
import { Router } from 'express';
const ofertasRouter = Router();
const notificarRouter = Router();
const notificarErrorRouter = Router();

const token = '1783837557:AAFOFLMUICIdsNnYKfudy4c8NyLebOUeoiE';

ofertasRouter.post("/", async (req, res) => {

    const obj = req.body;

    const bot = new TelegramBot(token, {polling: true});

    bot.on('polling_error', (error) => {});
    const chatIdGroupTeste = '-1001326613480';

    for (const key in obj.listaOfertas) {

      try {
          
          const res = bot.sendPhoto(chatIdGroupTeste, obj.listaOfertas[key].urlImageOrig);
          await sleep(10000);
          
          bot.sendMessage(chatIdGroupTeste, `🤘👏👏${obj.listaOfertas[key].descricaoPost}➡️➡️ ${obj.listaOfertas[key].link}`);
          await sleep(5000);  
      } catch (error) {
        console.log(error);
       
      }

    }
    
    bot.sendMessage(chatIdGroupTeste, `Para mais ofertas acesse: http://ofertabest.com`);
    return res.status(201).json({ status: "OK"});
})

notificarRouter.get("/", async (req, res) => {

    const obj: any = req.query.mensagem;

    const bot = new TelegramBot(token, {polling: true});

    bot.on('polling_error', (error) => {});
    const chatIdGroupTeste = '-587413235';
   
    bot.sendMessage(chatIdGroupTeste, obj);

    return res.status(201).json({ status: "OK"});
})



notificarErrorRouter.get("/", async (req, res) => {

  const obj: any = req.query.mensagem;

  const bot = new TelegramBot(token, {polling: true});

  bot.on('polling_error', (error) => {});
  const chatIdGroupTeste = '-587413235';
 
  bot.sendMessage(chatIdGroupTeste, obj);

  return res.status(201).json({ status: "OK"});
})

export { ofertasRouter , notificarRouter, notificarErrorRouter};
async function sleep(ms: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 


export function iniTelegram(){
  const bot = new TelegramBot(token, {polling: true});

  bot.on('polling_error', (error) => {});

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    //console.log(`ID ${chatId}`);
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Bem vindo ao https://ofertabest.com');
  });

}

