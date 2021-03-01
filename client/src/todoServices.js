import axios from 'axios'

const baseUrl= "/api/todos"

export const getTodos = async() => {
    const { data } = await axios.get(baseUrl)
    return data
}

export const addTodo = async(todo) => {
    await axios.post(baseUrl, todo)
}

export const updateTodo = async (id, changedItem) => {
    console.log('ser--', changedItem)
    await axios.put(`${baseUrl}/${id}`, changedItem)
}

export const deleteTodo = async(id) => {
    await axios.delete(`${baseUrl}/${id}`)
}

