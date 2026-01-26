import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home-page-container'>
        <div className="main-header">
          <h1>Welcome to Home page for My Book Store</h1> 
          <div className="book-conntainer">
            <span className="book-image">
              <img src='/download.jpg' alt='Software Development'/>
              <p>Software Development by Deepak Jain</p>
              </span>
              <span className="book-image">
                </span>
                <span className="book-image">

                </span>
          </div>
          </div>
    </div>
  )
}

export default Home