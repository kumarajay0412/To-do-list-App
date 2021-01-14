import React, { Component } from 'react'
import {Consumer} from '../context'
import axios from 'axios'

export default class Todo extends Component {
  style=() =>{
    const {complete}=this.props.todo
    return{textDecoration: complete ? "line-through":"none"}
  }
  toggle =( id,dispatch)=>{
    dispatch({type:"TOGGLE",payload:id})
  }
  remove =( id,dispatch)=>{
    axios.delete(`/todos/${id}`)
    .then(()=> dispatch({type:"REMOVE",payload:id}))
   
  }
    render() {
      const {title,_id} = this.props.todo
        return (
          <Consumer>{ value =>{
            const {dispatch} = value
            return <h3 classname ="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
            <i className=" far fa-times-circle fa-sm float-left m-1 text-danger" onClick={this.remove.bind(this,_id,dispatch)}></i> {title}
            <input type ="checkbox" className="m-2 float-right" onChange={this.toggle.bind(this,_id,dispatch)}/>
          </h3>

          } }
            </Consumer>
          
        )
    }
}
