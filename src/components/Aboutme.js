import React from 'react'
import photo from '../image.jpg'
import '../App.css'

const Aboutme = () => {
  return (
    <>
      <div className="back">
        <div className='divv'>
          <img className='circle' src={photo} width={200} height={200} alt="" />
          <h1 className='hone'>I'm Rahul Shinde<br></br>
            <p className='h5'>Mobile dev team member at Google Developer Student Clubs DDU</p>
            <h6>
              <a style={{ paddingRight: '10px' }} href="https://drive.google.com/file/d/1mbhyEO7C_z74eJAdiadrN6OGAKspadwo/view?usp=sharing" target='_blank' rel='noreferrer'>
                <button className='home-button'>View my SWE resume</button>
              </a>
              <a style={{ paddingRight: '10px' }} href="https://drive.google.com/file/d/1yQVSYY70pIPZB_P2BjIFOlFWkMJ3A5K_/view?usp=sharing" target='_blank' rel='noreferrer'>
                <button className='home-button'>View my DevOps resume</button>
              </a>
              <a href="https://medium.com/@rahul_226" target='_blank' rel='noreferrer'>
                <button className='home-button'>Read my blogs</button>
              </a>
            </h6>
          </h1>
        </div>
        <div className="p1">
          <h1>About me</h1>
          <p className='p2'>
          I am Rahul Shinde, currently pursuing a Bachelor of Technology in Information Technology from Dharmsinh Desai University, Gujarat.
          I am into Software development and Cloud DevOps.
          </p>
        </div>
      </div>
    </>
  )
}

export default Aboutme