import fastify from 'fastify';
import dotenv from 'dotenv';
import { routes } from './routes/routes';
import path from 'path';
import fs from 'fs';
import fastifyStatic from 'fastify-static';

dotenv.config();

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0' || 'localhost';
const app = fastify({ logger: false });

app.register(fastifyStatic, {
  root: path.join(__dirname, '../ui/build'),
});

app.register(routes, { prefix: '/api' });

app.get('*', (req, res) => {
  const stream = fs.createReadStream(path.resolve(__dirname, '../ui/build', 'index.html'));
  res.type('text/html').send(stream);
});

app.listen(PORT, HOST).then(() => {
  console.log('Listening on port', PORT);
});
