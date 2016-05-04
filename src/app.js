import app from 'dkoa';

import Router from './router.js';

const router = Router();
app
  .use(router.routes())
  .use(router.allowedMethods());
