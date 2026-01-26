import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    
  return (
    <div className="footer-main-container">
        All Right Reserve for AA.
        Copyright © {currentYear}
    </div>
  )
}

export default Footer