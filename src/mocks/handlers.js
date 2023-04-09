import { rest } from 'msw'

export const handlers = [
  // rest.post('/api/v1/posts', (req, res, ctx) => {
  //   const { username } = req.body

  //   return res(
  //     ctx.json({
  //       id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //       username,
  //       firstName: 'John',
  //       lastName: 'Maverick',
  //     })
  //   )
  // }),
  rest.get('/api/v1/weather?nx=55&ny=123', null),
]