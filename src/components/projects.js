import React from 'react'
import { useState } from 'react'
import '../App.css'
import ProjectItem from './projectsitem'

const Projects = () => {

  const [SDE, setSDE] = useState(true)
  const [CloudDevOps, setCloudDevOps] = useState(false)

  function importAll(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace('./', '')] = r(item)));
    return images;
  }

  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <div className="container my-3">
        <div style={{ display: 'inline-flex' }}>
          <h5 className="text-center" style={{ cursor: 'pointer', color: !SDE ? 'white' : '#0d6efd', textShadow: SDE ? '0px 0px 8px rgb(0 0 0 / 60%)' : 'none' }} onClick={() => {
            setSDE(true)
            setCloudDevOps(false)
          }}>Software Development Projects</h5>
          <h5 style={{ marginRight: '20px', marginLeft: '20px' }}>|</h5>
          <h5 className="text-center" style={{ cursor: 'pointer', color: !CloudDevOps ? 'white' : '#0d6efd',textShadow: CloudDevOps ? '0px 0px 8px rgb(0 0 0 / 60%)' : 'none' }} onClick={() => {
            setSDE(false)
            setCloudDevOps(true)
          }}>Cloud/DevOps Projects</h5>
        </div>
        {SDE &&
          <div className="row d-flex justify-content-center">
            <ProjectItem heightName='2rem' heightCard='32rem' url1='https://github.com/Rahul2570089/SDP' url2='https://youtu.be/YI-1CpNSa_s' photo={images['10.jpg']} name='PullVenture' description='PullVenture is a cross platform application which is a one stop platform for budding entrepreneurs for overall support. It is a platform which connects early age start-ups with investors.'></ProjectItem>
            <ProjectItem heightName='2rem' heightCard='32rem' url1='https://github.com/Rahul2570089/FortuneFarm' url2='https://youtu.be/Ixp9rAkUXS8' photo={images['9.jpg']} name='Fortune Farm' description='Fortune Farm is an innovative agriculture project that aims to provide farmers with easy access to agriculture products and weather information for better crop management.'></ProjectItem>
            <ProjectItem heightName='2rem' heightCard='32rem' url1='https://github.com/Rahul2570089/ChatApp' url2='https://youtube.com/shorts/j7P6oCw-_gw' photo={images['1.jpg']} name='MyChatApp' description='Fully functional chat application to send text messages. Made in flutter and used firebase as a backend , database used is cloud firestore.'></ProjectItem>
            <ProjectItem heightName='2rem' heightCard='32rem' url1='https://github.com/Rahul2570089/DUHacks' url2='https://youtu.be/oPXULuc3eiY' photo={images['8.jpeg']} name='Library Management' description='DU Hacks hackathon library online book issue project, used Flutter along with Google Firebase for the back-end which stores data in cloud fire store.'></ProjectItem>
            <ProjectItem heightName='2rem' heightCard='32rem' url1='https://github.com/Rahul2570089/StocksNews' url2='https://youtu.be/Vz57FiVsymM' photo={images['2.png']} name='StockOps App' description='Stocks info app in which integrated API for list of stocks and News-API for the business and stock market news along with watchlist feature.'></ProjectItem>
            <ProjectItem heightName='2rem' heightCard='32rem' url1='https://github.com/Rahul2570089/Tesla-clone' url2='https://youtu.be/1YkIUiXTong' photo={images['9.png']} name='Tesla Clone' description='Tesla website clone (UI) made in react using redux concept'></ProjectItem>
            <ProjectItem heightName='2rem' heightCard='32rem' url1='https://github.com/Rahul2570089/SharkTankIndia' url2='https://youtu.be/l-rzIXvHIJs' photo={images['3.jpg']} name='SharkTankIndia App' description='I won the Flutter UI challenge organized combinedly by CSI and GDSC clubs of DDU. App includes the profile page of sharks ,episodes page and the top products featured.'></ProjectItem>
          </div>}
        {CloudDevOps &&
          <div className="row d-flex justify-content-center">
            <ProjectItem heightName='6rem' heightCard='32rem' url1='' url2='https://youtu.be/7vARYruSjPg' photo={images['10.jpg']} name='Deployment of spring boot application using Docker container, Kubernetes through Jenkins' description='Creating container from docker image and deploying it with the help of kubernetes through Jenkins by creating pipeline.'></ProjectItem>
            <ProjectItem heightName='6rem' heightCard='32rem' url1='' url2='https://youtu.be/vMF9kgg0IwM' photo={images['9.jpg']} name='Azure DevOps pipeline including sonarqube and OWASP dependency check' description='Azure DevOps pipeline including sonarqube and OWASP dependency check of Maven based spring boot application.'></ProjectItem>
            <ProjectItem heightName='2rem' heightCard='32rem' url1='' url2='https://youtu.be/AaTwanp5Vec' photo={images['1.jpg']} name='Azure DevOps pipeline with docker image of application' description='Azure DevOps pipeline which build and pushed maven based spring boot application to docker and run it.'></ProjectItem>
            <ProjectItem heightName='5rem' heightCard='35rem' url1='' url2='https://youtu.be/SlOpbiK9ysQ' photo={images['8.jpeg']} name='Azure DevOps CI/CD pipeline deploying the docker container by kubernetes cluster through CD pipeline' description='Azure DevOps CI/CD pipeline deploying the docker container (CI pipeline) by kubernetes cluster through release (CD) pipeline.'></ProjectItem>
          </div>}
      </div>
    </>
  )
}

export default Projects