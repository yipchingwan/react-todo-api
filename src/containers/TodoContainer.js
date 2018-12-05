import { connect } from 'react-redux'
import Todos from '../components/Todos.js'

const mapDispatchToProps = (dispatch) => ({
    changeStatus : (id, content, status) => {
        let myStatus = status;
        if(myStatus==="active"){
            myStatus = "completed"
        }
        else{
            myStatus = "active"
        }
        const selectedItem = {
            content,
            status: myStatus
      }
      fetch("http://localhost:8080/api/todos/"+id, {
        mode: 'cors',
        method: 'PUT', 
        body: JSON.stringify(selectedItem),
        headers: new Headers({ 'Content-Type': 'application/json'})
        })
        .then(res=>res.json())
        .then(({id, status, content})=>{
            dispatch({
                type : "CHANGE_STATUS",
                payload : {id, status, content}
            })
        })

      
      
    }
  })

  export default connect(null, mapDispatchToProps)(Todos)

