import React, { Component } from 'react'

export default class Todos extends Component {
  passStatus = (id, content, status)=>{
    this.props.changeStatus(id, content, status)
  }
  
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo) => <li key={todo.id} onClick={()=>this.passStatus(todo.id, todo.content, todo.status)}>{todo.content}</li>)}
      </div>
    )
  }
}