'use strict'
const express = require('express');
const cors = require('cors')
const app = express();

const todosRouter= require('./controllers')

app.use(cors())

app.use('/api/todos', todosRouter);


app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})
