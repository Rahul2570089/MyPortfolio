import React from 'react'
import photo from '../image.jpg'
import '../App.css'

const Aboutme = () => {
  return (
    <>
      <div className="back">
        <div className='divv'>
          <img className='circle' src={photo} width={200} height={200} alt="" />
          <h1 className='hone'>I'm Rahul Shinde<br></br><p className='h5'>I'm into Flutter development, web development and cloud computing</p></h1>
        </div>
        <div className="p1">
          <h1>About me</h1>
          <p className='p2'>
            I am Rahul Shinde currently pursuing Bachelor of Technology in Information Technology from Dharmsinh Desai University, Nadiad, Gujarat.
            I am into Flutter development (mainly for android), web development (front-end) and cloud (GCP).
          </p>
        </div>
      </div>
    </>
  )
}

export default Aboutme