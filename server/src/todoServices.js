const Todo= require('./modal')

const getTodos = async (req, res) => {
    try {
        await Todo.find({})
            .then((blogs) => {
            res.json(blogs)
        })
    } catch (error) {
        
    }
}


const createTodo = async (req, res) => {
    try {
      const { title } = req.body
      const newTodo = {
      title
      }
      const todo= new Todo(newTodo)
        const savedTodo = await todo.save() 
      res.send(savedTodo)   
    } catch (error) {
      console.log('Error saving todo;',error)
    }
}

const updateTodo = async (req, res) => {
    try {
      const { id } = req.params
      const { body } = req
    
      const response = await Todo.findOneAndUpdate({ _id: id }, {completed: body.completed}, {new:true})
      res.send(response)   
    } catch (error) {
        console.log('Could not update', error)
    }
}

const deleteTodo = async (req, res) => {
  try {
      const { id } = req.params
      await Todo.findByIdAndRemove(id, (error) => {
          error? res.send(error):res.send('Successfully deleted')
      })
  } catch (error) {
      console.log(error)
  }
}

module.exports={getTodos, createTodo, updateTodo, deleteTodo}
