const { Router } = require('express')
const express = require('express')
const todosRouter = express.Router()
require('dotenv').config();

const { HOST, DB_PORT, USER, PASSWORD, DATABASE }= process.env

console.log('test---', HOST, DB_PORT, USER, PASSWORD, DATABASE)
const Database = require('./Database');

// const options= {
//     host:HOST,
//     port:DB_PORT,
//     user:USER,
//     password:PASSWORD,
//     database:DATABASE,
// }

const options= {
    host:'localhost',
    port: 3306,
    user: 'usr_todo',
    password: 'chiranjibi',
    database: 'db_todo',
}
const db = new Database(options);



todosRouter.get('/', async (req, res) => {
    try {
        db.doQuery('SELECT * FROM todos', (error, rows) => {
            if (!error) {
               res.send(rows)
            } else {
                console.log(error)
           }
       }) 
    } catch (error) {
        console.log(error)
    }
})



// router.post('/', isAuthenticated, createEvent)
// router.post('/:eventId/request', isAuthenticated, requestToJoin)
// router.get('/', findAllEvents)
// router.get('/requested', isAuthenticated, findRequestedEvents)
// router.get('/participant', isAuthenticated, findParticipatingEvents)
// router.get('/creator/:userId', isAuthenticated, findEventsByCreator)

module.exports= todosRouter