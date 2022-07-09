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
          <ProjectItem url1='https://github.com/Rahul2570089/ChatApp' url2='/' photo={images['1.jpg']} name='MyChatApp' description='Fully functional chat application to send text messages. Made in flutter and used firebase as a backend , database used is cloud firestore.'></ProjectItem>
          <ProjectItem url1='https://github.com/Rahul2570089/StocksNews' url2='/' photo={images['2.png']} name='StockOps App' description='Stocks info app in which integrated API for list of stocks and News-API for the business and stock market news along with watchlist feature.'></ProjectItem>
          <ProjectItem url1='https://github.com/Rahul2570089/SharkTankIndia' url2='/' photo={images['3.jpg']} name='SharkTankIndia App' description='I won the Flutter UI challenge organized combinedly by CSI and GDSC clubs of DDU. App includes the profile page of sharks ,episodes page and the top products featured.'></ProjectItem>
          <ProjectItem url1='https://github.com/Rahul2570089/Graph-Plotter-App' url2='/' photo={images['4.jpg']} name='GraphPlotter App' description='Graph Plotter app made in flutter used to plot graph based on inputs'></ProjectItem>
          <ProjectItem url1='https://github.com/Rahul2570089/Tic-Tac-toe_flutter' url2='https://play.google.com/store/apps/details?id=com.mobappdever.tictactoe1' photo={images['5.jpg']} name='Tic-Tac-Toe' description='Multiplayer, Single player Tic-Tac-Toe game made in flutter.'></ProjectItem>
          <ProjectItem url1='https://github.com/Rahul2570089/NewsDeck' url2='/' photo={images['6.jpg']} name='NewsDeck' description='News app made in react including all types of news in India, fetched the data from free News API'></ProjectItem>
          <ProjectItem url1='https://github.com/Rahul2570089/TextUtils' url2='/' photo={images['7.jpg']} name='TextUtils' description='TextUtils App made in react used to perform basic operations on strings i.e convert to uppercase, lowercase, count number of words'></ProjectItem>
        </div>
      </div>
    </>
  )
}

export default Projects