import React from 'react'

import {getTodos, updateTodo, deleteTodo} from '../todoServices'
import { FaTrash} from 'react-icons/fa';
import styles from './Todo.module.css'

const Todo = ({ data }) => {

    const handleChange =async(eventId) => {
        const data = await getTodos()
        const toChange = data.find((event) => event.eventId = eventId)
        console.log('xxx--', toChange)
        const changedItem = { completed: toChange.completed === 0 ? true : false }
        console.log('yyyy--', changedItem)
        await updateTodo(eventId, changedItem)
    }

   
    return (
        <div className={styles.todoMain}>
            <input checked={data.completed?'checked':''} onChange={()=>handleChange(data.eventId)} className={styles.checkbox} type="checkbox" /> 
            <p className={data.completed?styles.crossedTodo:styles.todo}>{ data.title}</p>
            <FaTrash onClick={async()=>await deleteTodo(data.eventId) } fontSize='23' className={styles.trashIcon}/>
        </div>
    )
}

export default Todo
