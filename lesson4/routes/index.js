const routes = require('express').Router();
const temple = require('./temple');

routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://github.com/ohsaraho',
    };
    res.send(docData);
  })
);

module.exports = routes;
