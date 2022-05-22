import express from 'express';
import { iniTelegram, notificarRouter, ofertasRouter, notificarErrorRouter } from './routes/group.route';

const port = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? 3051 : 3050);
const app = express();

console.log(`START  NODE-TELEGRAM - AMBIENTE ${process.env.NODE_ENV}   PORTA ${port}`)

app.use(express.json());
app.use( "/postTelegram", ofertasRouter);
app.use( "/notifica", notificarRouter);
app.use( "/error", notificarErrorRouter);
app.get('/', (require, response) => {
    return response.json({status: "OK"});
})

//iniTelegram();

app.listen(port);