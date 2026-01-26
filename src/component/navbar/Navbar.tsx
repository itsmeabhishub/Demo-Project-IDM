import React from 'react'
import { URLPaths } from '../../routing/urlPaths'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {HOME_PATH, BOOK_PAGE} = URLPaths
    const navigate = useNavigate()

    const homePage = () =>{
        navigate(HOME_PATH)
    }

    const redirectBookPage = () =>{
        navigate(BOOK_PAGE)
    }
  return (
    <div className='navbar-container'>
        <button className='home-path' onClick={homePage}>Home</button>
        <button className='book-path' onClick={redirectBookPage}>Book Page</button>
    </div>
  )
}

export default Navbar