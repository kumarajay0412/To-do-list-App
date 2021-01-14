import React, { Component } from 'react'
import Todo from './Todo';
import {Consumer} from '../context';

export default class Todos extends Component {
    render() {

        return (
            <div>
                <Consumer>{value => {
                    const { todos } =value
                    return todos.map(t => <Todo todo ={t} key ={t.id} ></Todo>)
                }}
                        
                </Consumer>       
            </div>
        )
    }
}
