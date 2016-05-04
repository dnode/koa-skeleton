import app from 'dkoa';
import dkoaHeaders from 'dkoa-headers';
import dkoaHttpAuth from 'dkoa-headers';

import Router from './router.js';

app.use(dkoaHeaders);
app.use(dkoaHttpAuth);
const router = Router();
app
  .use(router.routes())
  .use(router.allowedMethods());
