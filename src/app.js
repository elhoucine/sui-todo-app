import React from 'react'
import ReactDom from 'react-dom'
import FormText from '@schibstedspain/sui-form-text-input'
import Button from '@schibstedspain/sui-atom-button'

import './app.scss'

import TodoList from './TodoList'

class App extends React.Component {
  state = {
    text: '',
    errorMessage: '',
    todos: []
  }

  removeItem = elmId => {
    const newTodos = [...this.state.todos]
    newTodos.splice(elmId, 1)

    if (this.state.todos[elmId]) {
      this.setState({
        todos: newTodos
      })
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
      errorMessage: ''
    })
  }

  addTodo = event => {
    if (this.state.text === '') {
      this.setState({
        errorMessage: 'Please type a task'
      })
      return
    }

    this.setState({
      text: '',
      todos: [...this.state.todos, this.state.text]
    })
  }

  render () {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Add a task</h3>
        <FormText
          onChange={this.handleChange}
          name='Task name'
          value={this.state.text}
          errorMessage={this.state.errorMessage}
        />
        <br />
        <Button onClick={this.addTodo}>Add task</Button>

        <TodoList items={this.state.todos} removeItem={this.removeItem} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
