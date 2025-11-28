const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Главная страница');
});

app.get('/api/user', (req, res) => {
  res.json({ name: 'Иван', age: 30 });
});

app.listen(port, () => {
  console.log(`Express-сервер запущен на порту ${port}`);
});