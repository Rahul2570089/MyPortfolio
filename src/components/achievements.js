import React from 'react'
import '../App.css'

const Achievements = () => {

  function importAll(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
  }
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));

  return (
    <>
      <div className='pt-5 pb-5'>
        <h2>Coding Platform Profiles</h2>
        <div className="pt-5 d-flex justify-content-center">
          <div className='prof col-md-7 bg-white' style={{ justifyContent: 'center', boxShadow: '0px 0px 15px white' }} >
            <a href="https://www.hackerrank.com/rahul_226" target="_blank" rel="noreferrer"><img className='hov mx-4' src={images['hackerrank.png']} width='200px' alt="" /></a>
            <a href="https://www.codechef.com/users/rahul_226" target="_blank" rel="noreferrer"><img className='hov mx-4' src={images['codechef.png']} width='200px' alt="" /></a>
            <a href="https://codeforces.com/profile/rs2570089" target="_blank" rel="noreferrer"><img className='hov mx-4' src={images['codeforces.png']} width='200px' alt="" /></a>
            <a href="https://leetcode.com/rs2570089/" target="_blank" rel="noreferrer"><img className='hov mx-4' src={images['leetcode.png']} width='200px' alt="" /></a>
            <a href="https://github.com/Rahul2570089" target="_blank" rel="noreferrer"><img className='hov mx-4' src={images['github2.png']} width='200px' alt="" /></a>
            <a href="https://www.cloudskillsboost.google/public_profiles/31ababc1-796a-4b18-a38f-8c1ed96a0e24" target="_blank" rel="noreferrer"><img className='hov mx-4' src={images['gcp.png']} width='200px' alt="" /></a>
          </div>
        </div>
      </div>
      <div className='pt-3'>
        <h2>Certificates</h2>
        <div className='show'>
          <a className='cert' href='https://drive.google.com/file/d/1AofR22eo-jv4HioMk4WlfGOnn9xVQQSg/view?usp=sharing' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['forage.png']} alt="" width={40} height={40} />
            <p className='my-auto'>Virtual SWE Program JPMorgan Chase & Co.</p>
          </a>
          <a className='cert' href='https://drive.google.com/file/d/1IEQ6jZocSZMctv0Y4WGa1mx__0QaGTPj/view?usp=sharing' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['gdsc.png']} alt="" width={40} height={40} />
            <p className='my-auto'>Flutter UI challenge winner</p>
          </a>
          <a className='cert' href='https://www.cloudskillsboost.google/public_profiles/31ababc1-796a-4b18-a38f-8c1ed96a0e24/badges/2230980?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['qwiklabs.jpg']} alt="" width={40} height={40} />
            <p className='my-auto'>Create and Manage Cloud Resources</p>
          </a>
          <a className='cert' href='https://www.hackerrank.com/certificates/411fe8e30e3b' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['h2.png']} alt="" width={40} height={40} />
            <p className='my-auto'>Problem Solving certificate (basic)</p>
          </a>
          <a className='cert' href='https://drive.google.com/file/d/1PetO078rFO1-hGoi9rXkpV3jE6mMiBDo/view?usp=sharing' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['GSSoC.png']} alt="" width={40} height={40} />
            <p className='my-auto'>GSSoC active contributor participation certificate</p>
          </a>
          <a className='cert' href='https://drive.google.com/file/d/1hAvI3WA0Hd4M5jn5M0jjZXZDNfSehORW/view?usp=sharing' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['udemy.png']} alt="" width={40} height={40} />
            <p className='my-auto'>DevOps Fundamentals Course</p>
          </a>
          <a className='cert' href='https://drive.google.com/file/d/1yklk1_oOat9G0XbXqRl0mousj0Rz68ZD/view?usp=sharing' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['greatlearning.png']} alt="" width={40} height={40} />
            <p className='my-auto'>Introduction to DevOps</p>
          </a>
          <a className='cert' href='https://drive.google.com/file/d/1gMy23E5dUcGd_IGUjq-PHVMGOjKOmavs/view?usp=sharing' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['unstop.jpg']} alt="" width={40} height={40} />
            <p className='my-auto'>Certificate of participation in Hero CoLabs App Challenge 2.0</p>
          </a>
          <a className='cert' href='https://drive.google.com/file/d/1RmfQQXBrEsX7LXYn9Bxn5kYOzqK5tFqi/view?usp=sharing' target='_blank' rel='noreferrer'>
            <img className='circle my-auto' src={images['internshala.png']} alt="" width={40} height={40} />
            <p className='my-auto'>(ISP) Internshala Student Partner 27</p>
          </a>
        </div>
      </div>
      <br />
    </>
  )
}

export default Achievements