const express = require('express');

const routes = require('./routes');    //importando o arquivo
const errorHandler = require('./app/middlewares/errorHandler');
const cors = require('./app/middlewares/cors');

require('express-async-errors');

const app = express();

app.use(express.json());
app.use(cors)
app.use(routes);
app.use(errorHandler)

app.listen(3006, () => console.log('server started at http://localhost:3006'));
