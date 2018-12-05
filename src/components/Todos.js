import React, { Component } from 'react'

export default class Todos extends Component {
  passStatus = (id, content, status)=>{
    this.props.changeStatus(id, content, status)
    //alert(status)
  }
  
  render() {
    const {todos} = this.props
    return (
      <div>
        
        {todos.map((todo) => {
          if(todo.status==="completed"){
            return <li style={{textDecoration: "completed" ? 'line-through' : 'none'}} key={todo.id} onClick={()=>this.passStatus(todo.id, todo.content, todo.status)}>{todo.content}</li>
          }
          else{
            return <li key={todo.id} onClick={()=>this.passStatus(todo.id, todo.content, todo.status)}>{todo.content}</li>
          }
        }      
        )}
      </div>
    )
  }
}