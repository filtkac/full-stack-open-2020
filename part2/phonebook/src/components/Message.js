import React from 'react'

const Message = ({ message }) => {
  if (message === undefined) {
    return null
  }

  const color = message.status === 'success' ? 'green' : 'red'
  const messageStyle = {
    backgroundColor: 'gainsboro',
    fontSize: 20,
    color: color,
    padding: 20,
    margin: 15,
    borderColor: color,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10
  }

  return (<div style={messageStyle}>
    {message.message}
  </div>)
}

export default Message