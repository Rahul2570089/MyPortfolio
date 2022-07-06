import React from 'react'
import photo from '../image.jpg'
import '../App.css'

const Aboutme = () => {
  return (
    <>
    <div className='divv'>
      <img className='circle' src={photo} width={200} height={200} alt="" />
      <h1 className='hone'>I'm Rahul Shinde<br></br><h5 className='h5'>I'm into Flutter development, web development and cloud computing</h5></h1>
    </div>
    <div className="p1">
      <h1>About me</h1>
      <p className='p2'>
        I am Rahul Shinde currently pursuing Bachelor of Technology in Information Technology from Dharmsinh Desai University, Nadiad, Gujarat.
        I am into Flutter development (mainly for android), web development (front-end) and cloud (GCP).
      </p>
    </div>
    </>
  )
}

export default Aboutme