import express from 'express';
import route from './routers/router.js';
import db from './config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão feita com sucesso.');
});

const app = express();
app.use(express.json());
app.use(route);

export default app;
