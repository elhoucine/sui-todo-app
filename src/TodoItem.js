import React from 'react'
// import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

// import './app.scss'

const TodoItem = ({ todoText }) => {
  return <li>{todoText}</li>
}

TodoItem.propTypes = {
  todoText: PropTypes.string.isRequired
}

export default TodoItem
