import express from 'express';
import route from './routers/router.js';
import db from './config/dbConnect.js';
const app = express();

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão feita com sucesso.');
});

app.use(express.json());
app.use(route);

export default app;
