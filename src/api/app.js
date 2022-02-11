const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.get('/ping', (req, res) => res.status(200).send('pong'));

app.get('/users', rescue(UserController));

app.use(errorMiddleware);

module.exports = app;
