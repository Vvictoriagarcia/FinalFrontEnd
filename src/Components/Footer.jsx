import React from 'react'
import "../index.css"
import imagen from  "../images/DH.png"

const Footer = () => {
  return (
    <footer className="footer">
        <p>Powered by</p>
        <img src={imagen} alt='DH-logo' />
    </footer>
  )
}

export default Footer
