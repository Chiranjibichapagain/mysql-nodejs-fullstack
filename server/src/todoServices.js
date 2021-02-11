const dbConn = require('./db.config')

const getSql = 'select * from todos';
const createSql = 'insert into todos (eventId, title, completed) values(?,?,?)';
const updateSql = 'update todos set completed=? where eventId=?';
const deleteSql = 'delete from todos where eventId=?';

const getTodos = async (req, res) => {
    try {
        await dbConn.query(getSql, (error, result) => {
            if (error) {
                console.log('error=>', error)  
            } else {
                res.send(result)
            }
        }) 
    } catch (error) {
        console.log(error) 
    }
}


const createTodo = async (req, res) => {
    try {
        const { eventId, title, completed } = req.body
        await dbConn.query(createSql, [eventId, title, completed], (error, result) => {
            if (error) {
                console.log('Error=>', error)
            } else {
                res.send(result.message)
                console.log(result.message)
            }
        } )
    } catch (error) {
       console.log(error) 
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { completed } = req.body
        
        await dbConn.query(updateSql, [completed, id], (error, result) => {
            if (error) {
               console.log('Error=>', error)
            } else {
                res.send(result.message)
           }
       }  ) 
    } catch (error) {
        console.log(error)
    }
}

const deleteTodo = async (req, res) => {
    try {
        const {id}=req.params
        await dbConn.query(deleteSql, [id], (error, result) => {
            if (error) {
               console.log('Error=>', error)
            } else {
                res.send(result.message)
           }
       }) 
    } catch (error) {
        console.log(error)
    }
}

module.exports={getTodos, createTodo, updateTodo, deleteTodo}
