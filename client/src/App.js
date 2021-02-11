import React, { useEffect, useState } from "react";

import Todo from './Todo'
import AddTodo from "./AddTodo";
import { getTodos } from './todoServices'

import styles from './App.module.css'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [data])

  const fetchData = async() => {
    const data = await getTodos()
    setData(data)
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>TODOs</h1>
      <p className={styles.para}>Track your daily activities with todo</p>
      <AddTodo/>
      <hr className={styles.hr} />
      {data.length>0 ? data.map((todo) => (
      <Todo key={todo.eventId} data={todo} />
      )) :
      <h2 className={styles.nodata}>Oops! no task in the list! Add a task to try.</h2>
      }
    </div>
  );
};

export default App;
