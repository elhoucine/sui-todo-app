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

  componentDidMount () {
    this.setState({
      todos: JSON.parse(window.localStorage.getItem('todos')) || []
    })
  }

  componentWillUpdate (oldState, currentState) {
    this.updateStore(currentState.todos)
  }

  updateStore = (todos = []) => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }

  removeItem = elmId => {
    if (this.state.todos[elmId]) {
      const newTodos = [...this.state.todos]
      newTodos.splice(elmId, 1)

      this.setState({
        todos: newTodos
      })
    }
  }

  checkItem = elmId => {
    if (this.state.todos[elmId]) {
      const newTodos = [...this.state.todos]
      newTodos[elmId].checked = !newTodos[elmId].checked

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
      todos: [...this.state.todos, { text: this.state.text, checked: false }]
    })
  }

  render () {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TodoList
          items={this.state.todos}
          removeItem={this.removeItem}
          checkItem={this.checkItem}
        />
        <h3>Something todo?</h3>
        <FormText
          onChange={this.handleChange}
          name='Task name'
          value={this.state.text}
          errorMessage={this.state.errorMessage}
        />
        <br />
        <Button onClick={this.addTodo}>Add task</Button>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
