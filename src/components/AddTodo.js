import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = e => this.setState({title: e.target.value })

    onSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }
    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="New Todo ..." 
                    style={{flex:'10', padding:'5px', }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button 
                    type="submit"
                    className="btn"
                    style={{flex:'1'}}>Submit</button>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo


