import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({
    message: 'Hello World!',
  });
});

app.listen(3333, () => {
  console.log('App running on port 3333!');
});
