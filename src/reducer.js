const initialState = {
  todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, payload]
      }

    case "UPDATE_TODOS":
      return {
        todos: payload
      }

    case "CHANGE_STATUS":
    const todos = state.todos.map(item=>{
      if(item.id===payload.id){
        item.status = payload.status
      }
      return item
    })
    return {
      todos
    }

    case "FILTER_COMPLETE":
      return {todos : payload}

    default:
      return state
  }
}
