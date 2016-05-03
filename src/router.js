import KoaRouter from 'koa-router';

export default () => {
  const router = new KoaRouter();

  router.get('/', async (ctx) => {
    ctx.body = 'Hello Koa!';
  });

  return router;
};
