import React, { useState } from 'react'
import Modal from './Components/Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <Button size="lg" color="light" variant="primary" onClick={() => setIsOpen(true)}>Open Modal</Button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </div>
  )
}