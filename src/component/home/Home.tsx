import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home-page-container'>
        <div className="main-header">
          <h1>Welcome to Home page for My Book Store</h1> 
          <div className="book-conntainer">
            <span className="book-image">
              <img src='/download.jpg' alt='Software Development' className='image-sft'/>
              <p className='text'>Software Development by Deepak Jain</p>
              </span>
              <span className="book-image">
                  <img src='/ittesting.jpg' alt='Testing Page' className='image-sft' />
                  <p className="text"> Testing Computer Software</p>
                </span>
                <span className="book-image">
              <img src='/sftware.jpg' alt='Software Tools' className='image-sft'/>
              <p className="text"> Software Engineering</p>
                </span>
          </div>
          </div>
    </div>
  )
}

export default Home