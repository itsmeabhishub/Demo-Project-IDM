import React from 'react'
import { URLPaths } from '../../routing/urlPaths'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {HOME_PATH} = URLPaths
    const navigate = useNavigate()
    const redirectToHome = () =>{
        navigate(HOME_PATH)
    }
  return (
    <div className='header-container-main'>
        <div><span onClick={redirectToHome}>Demo Book Corner</span></div>
    </div>
  )
}

export default Header