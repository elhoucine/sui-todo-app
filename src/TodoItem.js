import React from 'react'
import PropTypes from 'prop-types'
import AtomButton from '@schibstedspain/sui-atom-button'
import FormCheckbox from '@schibstedspain/sui-form-checkbox'
// import './app.scss'

const TodoItem = ({ _id, todoItem, removeItem, checkItem }) => {
  return (
    <li style={{ display: 'flex' }}>
      <FormCheckbox
        name='todo'
        checked={todoItem.checked}
        onChange={() => checkItem(_id)}
      />
      <span
        style={{
          textDecoration: todoItem.checked && 'line-through',
          flexBasis: '100%'
        }}
      >
        {todoItem.text}
      </span>
      <AtomButton size='small' onClick={() => removeItem(_id)}>
        X
      </AtomButton>
    </li>
  )
}

TodoItem.propTypes = {
  _id: PropTypes.number.isRequired,
  todoItem: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
  checkItem: PropTypes.func.isRequired
}

export default TodoItem
