import Koa from 'koa';

import Router from './router.js';

const app = new Koa();
const router = Router();
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(process.env.PORT);
