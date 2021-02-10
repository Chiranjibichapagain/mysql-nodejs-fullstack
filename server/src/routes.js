const { Router } = require('express')
const express = require('express')
const todosRouter = express.Router()

const {getTodos, createTodo, updateTodo, deleteTodo} = require('./todoServices')


todosRouter.get('/', getTodos);
todosRouter.post('/', createTodo)
todosRouter.put('/:id', updateTodo)
todosRouter.delete('/:id', deleteTodo)

module.exports= todosRouter