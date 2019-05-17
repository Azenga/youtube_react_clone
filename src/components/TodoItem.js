import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '8px',
            borderBottom: '1px dotted #ccc',
            textDecoration: this.props.todo.completed? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo
        return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={ this.props.toggleComplete.bind(this, id) } /> { ' ' }
                {title}
                <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
            </p>
        </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    backgroundColor: '#f00',
    display: 'block',
    color: '#fff',
    borderRadius: '50%',
    border: 'none',
    padding: '4px',
    float: 'right',
    width: '20px',
    hieght: '20px',
}

export default TodoItem
