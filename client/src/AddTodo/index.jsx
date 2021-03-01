import React, { useState } from 'react'

import {addTodo} from '../todoServices'
import styles from './AddTodo.module.css'

function AddTodo() {
    
    const [todo, setTodo] = useState({
        title: ''
    })
    
    const handleChange = (event) => {
        setTodo({...todo, title:event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo({ title: '' })
        window.location.reload()
    }

    return (
        <div className={styles.inputWrapper}>
            <input value={todo.title} className={styles.inputField} type='text' onChange={handleChange} />
            <button onClick={handleSubmit} className={styles.btn}>ADD</button>
        </div>
    )
}

export default AddTodo
