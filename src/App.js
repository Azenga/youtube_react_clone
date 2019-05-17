import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import About from './components/pages/About'
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';
//import uuid from 'uuid';
import Axios from 'axios';

class App extends Component{
    state = {
        todos: []
    }

    //Toggle complete
    toggleComplete = id => {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id) todo.completed = !todo.completed
            return todo
        })})
    }

    //Delete a Todo
    deleteTodo = id => {

        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
            this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
        })
        .catch(e => console.log(e))
    }

    addTodo = title => {

        Axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false,
        })
        .then(res => {
            this.setState({todos: [...this.state.todos, res.data]})
        })
        .catch(e => console.log(e))
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
        .then(res => {
            this.setState({todos: res.data})
        })
        .catch(ex => console.log(ex))
    }

    render(){
        return (
            <Router>
                <div>
                    <Header />

                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
                        </React.Fragment>
                    )} />

                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;