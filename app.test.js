const request = require('supertest');
const app = require('./index');

test('GET / deve retornar mensagem correta', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Aplicação funcionando!');
});
