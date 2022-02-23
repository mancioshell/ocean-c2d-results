import { Badge } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function Footer() {

  useEffect(() => {
    const getCustomerList = async () => {      
    }

    getCustomerList()
  }, [])

  return (
    <footer>
      <p>
        Powered by{' '}
        <Badge bg="light">
          <a
            href="https://github.com/mancioshell"
            target="_blank"
            rel="noreferrer">
            mancioshell
          </a>
        </Badge>      
      </p>
    </footer>
  )
}

export { Footer }

export default Footer