const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');
// const port =  process.env.PORT || 8080;
const app = express();

// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hello world!')
// })

// app.listen(port, () => {
//   console.log(`Example port is ${port}`)
// })

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/professional', professionalRoutes);

app.listen(8080);