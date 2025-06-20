const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Aplicação funcionando!');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

module.exports = app;
