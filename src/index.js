const express = require('express');
const PORT = 3000;
const app = express();
require('dotenv').config();
/* JSON body parse*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));

app.get('/', (req, res, next) => {
  console.info('/hello call success ');
  res.send('Welcome to Express harperdb project');
});

app.get('/details', (req, res, next) => {
  console.info('/hello call success ');
  res.send('Details Response');
});

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});
