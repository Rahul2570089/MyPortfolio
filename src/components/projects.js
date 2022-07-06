import React from 'react'
import '../App.css'
import ProjectItem from './projectsitem'

const Projects = () => {

  function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
  }

  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
  return (
    <>
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          <ProjectItem photo={images['1.jpg']}  name='MyChatApp' description='Fully functional chat application to send text messages. Made in flutter and used firebase as a backend , database used is cloud firestore.'></ProjectItem>
          <ProjectItem photo={images['2.png']} name='StockOps App' description='Stocks info app in which integrated API for list of stocks and News-API for the business and stock market news along with watchlist feature.'></ProjectItem>
          <ProjectItem photo={images['3.jpg']} name='SharkTankIndia App' description='I won the Flutter UI challenge organized combinedly by CSI and GDSC clubs of DDU. App includes the profile page of sharks ,episodes page and the top products featured.'></ProjectItem>
          <ProjectItem photo={images['4.jpg']} name='GraphPlotter App' description='Graph Plotter app made in flutter used to plot graph based on inputs'></ProjectItem>
          <ProjectItem photo={images['5.jpg']} name='Tic-Tac-Toe' description='Multiplayer, Single player Tic-Tac-Toe game made in flutter.  '></ProjectItem>
          <ProjectItem photo={images['1.jpg']} name='NewsDeck' description='News app made in react including all types of news in India, fetched the data from free News API'></ProjectItem>
          <ProjectItem photo={images['1.jpg']} name='TextUtils' description='TextUtils App made in react used to perform basic operations on strings i.e convert to uppercase, lowercase etc'></ProjectItem>
        </div>
      </div>
    </>
  )
}

export default Projects