'use strict'
const express = require('express');
const bodyParser= require('body-parser')
const cors = require('cors')
const dotenv= require('dotenv')
const mongoose= require('mongoose')
const app = express();

const todosRouter= require('./src/routes')
dotenv.config()
app.use(cors())
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('Problem connecting to mongoDB', error.message)  
})

app.use('/api/todos', todosRouter);


app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})
