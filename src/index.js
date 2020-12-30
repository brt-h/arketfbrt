console.log('Hello Project.');

import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
 
const app = express();

app.use(cors());
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/bird', (req, res) => {
    res.send('Hello bird!');
  });
 
app.listen(process.env.PORT, () =>
  console.log('Example app listening on port 3000!'),
);