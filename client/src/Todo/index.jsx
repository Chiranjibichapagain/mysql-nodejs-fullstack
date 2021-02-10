import React from 'react'

import { FaTrash, FaEdit } from 'react-icons/fa';
import styles from './Todo.module.css'

const Todo = ({ data }) => {
    
    const handleChange = () => {
    }

    const handleDelete = () => {
   }

    return (
        <div className={styles.todoMain}>
            <input checked={data.completed?'checked':''} onChange={handleChange} className={styles.checkbox} type="checkbox" /> 
            <p className={data.completed?styles.crossedTodo:styles.todo}>{ data.title}</p>
            <FaEdit onClick={handleDelete} fontSize='23' className={styles.trashIcon}/>
            <FaTrash onClick={handleDelete} fontSize='23' className={styles.trashIcon}/>
        </div>
    )
}

export default Todo
