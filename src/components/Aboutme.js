import React from 'react'
import photo from '../image.jpg'
import '../App.css'

const Aboutme = () => {
  return (
    <>
      <div className="back">
        <div className='divv'>
          <img className='circle' src={photo} width={200} height={200} alt="" />
          <h1 className='hone'>I'm Rahul Shinde<br></br><p className='h5'>Mobile dev team member at Google Developer Student Clubs DDU</p><h6> <a href="https://medium.com/@rahul_226" target='_blank' rel='noreferrer'><button className='home-button'>Read my blogs</button></a></h6></h1>
        </div>
        <div className="p1">
          <h1>About me</h1>
          <p className='p2'>
            I am Rahul Shinde currently pursuing Bachelor of Technology in Information Technology from Dharmsinh Desai University, Nadiad, Gujarat.
            I am into Mobile App development (Flutter) majorly and cloud (GCP and AWS).
          </p>
        </div>
      </div>
    </>
  )
}

export default Aboutme