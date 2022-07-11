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
        <a href="https://www.linkedin.com/in/rahul-shinde-b8b7351b9/" target='_blank' rel='noreferrer' ><img className='icon' target='_blank' rel='noreferrer' src={images['LinkedIn.png']} alt=''></img></a>
        <a href="https://www.instagram.com/rahul_shinde226/" target='_blank' rel='noreferrer' ><img className='icon' target='_blank' rel='noreferrer' src={images['Instagram.webp']} alt=''></img></a>
        <a href="https://github.com/Rahul2570089" target='_blank' rel='noreferrer'><img className='icon' src={images['github.png']} alt=''></img></a>
        <a href="https://twitter.com/rahul_22602" target='_blank' rel='noreferrer'><img className='icon' target='_blank' rel='noreferrer' src={images['twitter.png']} alt=''></img></a>
        <a href="https://www.reddit.com/user/Bully_Maguire_O_o" target='_blank' rel='noreferrer'><img className='icon' target='_blank' rel='noreferrer' src={images['reddit.png']} alt=''></img></a>
      </div>
    </>
  )
}

export default Contactme