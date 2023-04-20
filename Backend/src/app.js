const express = require('express');
const cors = require('cors')
const router = require('./router');


const app = express();

// Para conseguir trabalhar com dados em Json
app.use(express.json());
app.use(cors());
app.use(router);



module.exports = app;