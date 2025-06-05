const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Aplicação funcionando!'));

test('GET / deve retornar mensagem correta', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Aplicação funcionando!');
});
