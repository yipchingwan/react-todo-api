import { connect } from 'react-redux'
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  //todos: state.todos
  isOnlyActive : state.isOnlyActive,
  todos: state.todos.filter(_=>{
    return state.isOnlyActive ? _.status==='active' : true
  })
})

export default connect(mapStateToProps)(TodoList)