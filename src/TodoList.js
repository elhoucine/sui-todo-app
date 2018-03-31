import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

const TodoList = ({ items = [] }) => {
  return (
    <ul>
      <h3>ToDos</h3>
      {items.map((n, i) => <TodoItem key={i} todoText={n} />)}
    </ul>
  )
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired
}

export default TodoList
