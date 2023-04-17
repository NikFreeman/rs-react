import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
