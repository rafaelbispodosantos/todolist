const express = require('express');
const app = express();

const PORT =  process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/agendalive'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/agendalive/index.html');
});

app.listen(PORT, () => {
  console.log('Servidor iiciado na porta' + PORT);
})
