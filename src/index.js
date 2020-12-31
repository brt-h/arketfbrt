console.log('Hello Project.');

import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
 
const app = express();

app.use(cors());

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
 
let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});
 
app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});
 
app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

//TODO: remove the above and continue tutorial <https://www.robinwieruch.de/node-express-server-rest-api/> from heading "Application-Level Express Middleware"
//
// // C for Create: HTTP POST
// app.post('/users', (req, res) => {
//   return res.send('POST HTTP method on user resource');
// });

// // R for Read: HTTP GET
// app.get('/users', (req, res) => {
//   return res.send('GET HTTP method on user resource');
// });

// // U for Update HTTP PUT
// app.put('/users/:userId', (req, res) => {
//   return res.send(
//     `PUT HTTP method on user/${req.params.userId} resource`,
//     );
// });

// // D for Delete: HTTP Delete
// app.delete('/users/:userId', (req, res) => {
//   return res.send(
//     `DELETE HTTP method on user/${req.params.userId} resource`,
//     );
// });
 
// app.listen(process.env.PORT, () =>
//   console.log(`Example app listening on port ${process.env.PORT}!`),
// );