import React from 'react'

const value : Value = {
  message: {
    text: '',
    type: '',
    variant: 'light',
    show: false
  },
  addMessage: (message : Message) => {}
}

interface Message {
  text : string
  type: string
  variant: string
  show: boolean
}

interface Value {
  message : Message
  addMessage: (message : Message) => any
}

const UIContext = React.createContext(value)

export { UIContext }

export default UIContext