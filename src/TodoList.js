import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

const TodoList = ({ items = [], removeItem }) => {
  return (
    <ul>
      <h3>ToDos</h3>
      {items.map((n, i) => (
        <TodoItem key={i} _id={i} todoText={n} removeItem={removeItem} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  removeItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default TodoList
