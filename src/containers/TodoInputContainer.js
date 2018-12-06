
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput.js'

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: newTodo => {
    const newTodoItem = {
      content: newTodo,
      status: "active"
    }
    fetch("http://localhost:8080/api/todos", {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(newTodoItem)
    })
    .then(res => res.json())
    .then(({id, status, content}) => {
      dispatch({
        type: 'ADD_TODO',
        payload: {id, status, content}
      })
    })
  },

  taskFilter : status =>{
    if(status){
      fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=active", {mode: 'cors'})
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "FILTER_COMPLETE",
          payload: res._embedded.todos
        })
      })
    }
    else{
      fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=completed,active", {mode: 'cors'})
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "FILTER_COMPLETE",
          payload: res._embedded.todos
        })
      })

    }
  }
})
// const mapDispatchToProps = {
//   addNewTodo: newTodo => ({
//     type: 'ADD_TODO',
//     payload: newTodo
//   })
// }
export default connect(null, mapDispatchToProps)(TodoInput)