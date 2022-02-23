import { Toast } from 'react-bootstrap'
import React, { useContext } from 'react'

import { UIContext } from 'Contexts/UIContext'

function Messages() {
  const { addMessage, message } = useContext(UIContext)

  return message.show ? (
    <Toast
      animation={true}
      onClose={() =>
        addMessage({ text: '', type: '', variant: 'light', show: false })
      }
      show={message.show}
      delay={5000}
      className={`bg-${message.variant}`}
      autohide>
      <Toast.Header>
        <h4 className="mr-auto">
          <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
          {message.type}
        </h4>
      </Toast.Header>
      <Toast.Body>
        {' '}
        <strong>{message.text} </strong>
      </Toast.Body>
    </Toast>
  ) : null
}

export { Messages }

export default Messages