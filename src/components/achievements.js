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
      <div className='my-5'>
        <h2>Coding Platform Profiles</h2>
        <div className="coding my-3">
          <img className='mx-4' src={images['hackerrank.png']} width='200px' alt="" />
          <img className='mx-4' src={images['codechef.png']} width='200px' alt="" />
          <img className='mx-4' src={images['codeforces.png']} width='200px' alt="" />
          <br />
          <img className='mx-4' src={images['leetcode.png']} width='200px' alt="" />
          <img className='mx-4' src={images['github2.png']} width='200px' alt="" />
          <img className='mx-4' src={images['gcp.png']} width='200px' alt="" />
        </div>
      </div>
      <div className='pt-5'>
        <h2>Certificates</h2>
        <div className='show'>
          <div className='cert'>
            <img className='circle my-auto' src={images['forage.png']} alt="" width={40} height={40} />
            <p className='my-auto'>Virtual SWE Program JPMorgan Chase & Co.</p>
          </div>
          <div className='cert'>
            <img className='circle my-auto' src={images['gdsc.png']} alt="" width={40} height={40} />
            <p className='my-auto'>Flutter UI challenge winner</p>
          </div>
          <div className='cert'>
            <img className='circle my-auto' src={images['qwiklabs.jpg']} alt="" width={40} height={40} />
            <p className='my-auto'>Create and Manage Cloud Resources</p>
          </div>
          <div className='cert'>
            <img className='circle my-auto' src={images['h2.png']} alt="" width={40} height={40} />
            <p className='my-auto'>Problem Solving certificate (basic)</p>
          </div>
          <div className='cert'>
            <img className='circle my-auto' src={images['udemy.png']} alt="" width={40} height={40} />
            <p className='my-auto'>DevOps Fundamentals Course</p>
          </div>
          <div className='cert'>
            <img className='circle my-auto' src={images['greatlearning.png']} alt="" width={40} height={40} />
            <p className='my-auto'>Introduction to DevOps</p>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Achievements