'use strict'
const express = require('express');
const bodyParser= require('body-parser')
const cors = require('cors')
const dotenv= require('dotenv')
const app = express();

const todosRouter= require('./src/routes')
dotenv.config()
app.use(cors())
app.use(bodyParser.json());

app.use('/api/todos', todosRouter);


app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})
