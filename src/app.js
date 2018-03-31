import React from 'react'
import ReactDom from 'react-dom'
import FormText from '@schibstedspain/sui-form-text-input'
import Button from '@schibstedspain/sui-atom-button'

import './app.scss'

class App extends React.Component {
  state = {
    text: '',
    errorMessage: '',
    todos: []
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
        <ul>
          <h3>ToDos</h3>
          {this.state.todos.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
