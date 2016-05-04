import dheaders from 'dheaders';
import dhttpAuth from 'dhttp-auth';
import app from 'dkoa';

import Router from './router.js';

app.use(dheaders);
app.use(dhttpAuth);
const router = Router();
app
  .use(router.routes())
  .use(router.allowedMethods());
