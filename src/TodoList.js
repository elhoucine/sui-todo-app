import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

const TodoList = ({ items = [], removeItem, checkItem }) => {
  return (
    <ul>
      <h3>Things I need to do</h3>
      {items.map((n, i) => (
        <TodoItem
          key={i}
          _id={i}
          todoItem={n}
          removeItem={removeItem}
          checkItem={checkItem}
        />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  removeItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  checkItem: PropTypes.func.isRequired
}

export default TodoList
