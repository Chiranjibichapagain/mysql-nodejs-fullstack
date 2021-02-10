import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './AddTodo.module.css'

function AddTodo() {
    
    const [todo, setTodo] = useState({
        id: uuid(),
        todo: '',
        completed:false
    })
    
    const handleChange = (event) => {
        setTodo({...todo, todo:event.target.value})
    }

    const handleSubmit = () => {
        setTodo({...todo, todo:''})
    }

    return (
        <div className={styles.inputWrapper}>
            <input value={todo.todo} className={styles.inputField} type='text' onChange={handleChange} />
            <button onClick={handleSubmit} className={styles.btn}>ADD</button>
        </div>
    )
}

export default AddTodo
