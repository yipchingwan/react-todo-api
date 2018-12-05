import React, { Component } from 'react'

export default class Todos extends Component {
  changeStatus = (id)=>{
    this.props.changeStatus(id)
  }
  
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo) => <li key={todo.id} onClick={this.changeStatus(todo.id)}>{todo.content}</li>)}
      </div>
    )
  }
}