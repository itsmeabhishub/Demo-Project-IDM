import React from 'react'
import { URLPaths } from '../../routing/urlPaths'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './Header.css'

const Header = () => {
  const { HOME_PATH } = URLPaths
  const navigate = useNavigate()
  const redirectToHome = () => {
    navigate(HOME_PATH)
  }
  return (
    <div className='header-container-main'>
      <div className='left-side'><span onClick={redirectToHome} className='header-text'>Demo Book Corner</span></div>
      <div className='right-side'> <Navbar /></div>
    </div>
  )
}

export default Header