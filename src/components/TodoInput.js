import React, { Component } from 'react'


export default class TodoInput extends Component {
  onAdded = () => {
    const {input} = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }
  onCheck = (evt) => {
    this.props.taskFilter(evt.target.checked)
  }

  onUpdateFilter = (e) => {
    // this.props.dispatch({
    //   type : "SET_FILTER" , 
    //   payload : !this.props.isOnlyActive
    // })
    this.props.onUpdateFilter(!this.props.isOnlyActive)
  }

  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onAdded}>add</button>
        <span>Active</span>
        <input type="checkbox" onChange={this.onCheck}/>
        <input type="checkbox" checked={this.props.isOnlyActive} onChange={this.onUpdateFilter}/>
        
      </div>
    )
  }
}