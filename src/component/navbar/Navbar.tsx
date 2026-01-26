import React from 'react'
import { URLPaths } from '../../routing/urlPaths'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const {HOME_PATH, BOOK_PAGE, ABOUT_US} = URLPaths
    const navigate = useNavigate()


    const redirectFunction = (e : string) =>{
        console.log(e)
        if(e === 'home'){
             navigate(HOME_PATH)
        }
        if(e === 'book'){
            navigate(BOOK_PAGE)
        }
        if(e  === 'about'){
             navigate(ABOUT_US)
        }
    }
  return (
    <div className='navbar-container'>
        <button className='navbar-path' onClick ={ () =>redirectFunction('home')}>Home</button>
        <button className='navbar-path' onClick={ () => redirectFunction('book')}>Book Page</button>
        <button className="navbar-path" onClick={() => redirectFunction('about')}>About Us</button>
    </div>
  )
}

export default Navbar