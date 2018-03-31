import React from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
// import './app.scss'

const TodoItem = ({ _id, todoText, removeItem }) => {
  return (
    <li>
      {todoText}
      <Button link size='small' onClick={() => removeItem(_id)}>
        X
      </Button>
    </li>
  )
}

TodoItem.propTypes = {
  _id: PropTypes.number.isRequired,
  todoText: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default TodoItem
