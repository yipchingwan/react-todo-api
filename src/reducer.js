const initialState = {
  isOnlyActive : false,
  todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,todos: [...state.todos, payload]
      }

    case "UPDATE_TODOS":
      return {
        ...state,todos: payload
      }

    case "CHANGE_STATUS":
    const todos = state.todos.map(item=>{
      if(item.id===payload.id){
        item.status = payload.status
      }
      return item
    })
    return {
      ...state,todos
    }

    case "FILTER_COMPLETE":
      return {...state, todos : payload}

    case "SET_FILTER":
      return {...state, isOnlyActive: payload}
    default: 
      return state
  }
}
