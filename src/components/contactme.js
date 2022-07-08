import React from 'react'
import '../App.css'

const Contactme = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
  }

  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));

  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <div className="box mt-5 mx-5">
          <form>
            <div className="formm">
              <h1>Contact me</h1>
              <label className='textform d-flex justify-content-start' htmlFor="name">Name</label>
              <input className='textform mb-3' type="text" id='name' style={{ width: '100%' }} />
              <label className='textform d-flex justify-content-start' htmlFor="email">Email</label>
              <input className='textform mb-3' type="email" id='email' />
              <label className='textform d-flex justify-content-start' htmlFor="message">Message</label>
              <textarea className='textform mb-4' type="text" id='message' />
              <button type="submit" className='form-button'>Send</button>
            </div>
          </form>
        </div>
      </div>
      <h2>You can also contact me at</h2>
      <div className="icons-box">
        <img className='icon' src={images['LinkedIn.png']} alt=''></img>
        <img className='icon' src={images['Instagram.webp']} alt=''></img>
        <img className='icon' src={images['github.png']} alt=''></img>
        <img className='icon' src={images['twitter.png']} alt=''></img>
      </div>
    </>
  )
}

export default Contactme