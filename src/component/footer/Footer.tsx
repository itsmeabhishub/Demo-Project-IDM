import React from 'react'

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