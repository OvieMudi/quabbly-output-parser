import fastify from 'fastify';
import dotenv from 'dotenv';
import { routes } from './routes/routes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = fastify({ logger: false });

app.register(routes, { prefix: '/v1' });

app.listen(PORT).then(() => {
  console.log('Listening on port', PORT);
});