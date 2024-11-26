import React from 'react'

interface ModalProps {
    content: string ;
    onClose: () => void ;
}

const Modal: React.FC<ModalProps> = ({ content, onClose}) => {
  return (
    <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <div>
            <h2>{content}</h2>
            <p>Login yoki Sign Up shakli shu yerda bo'ladi!</p>
            <button onClick={onClose}></button>
        </div>
    </div>
  )
}

export default Modal