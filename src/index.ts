import express from 'express';

import { injectEnvFiles } from './envs';
import { getCategories, getConfigs } from './methods';

injectEnvFiles('.env', '');

const app = express();

app.get('/events/categories', function(req, res) {
  getCategories().pipe(res);
});

app.get('/events/config', function(req, res) {
  getConfigs().pipe(res);
});

app.listen(process.env?.SERVER_PORT ?? 8001, () => {
  console.log('server run in', process.env?.SERVER_PORT ?? 8001, 'port');
});
