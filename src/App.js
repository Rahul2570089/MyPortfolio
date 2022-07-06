import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Aboutme from './components/Aboutme';
import Education from './components/education';
import  Projects  from './components/projects';
import Achievements from './components/achievements';
import Contactme from './components/contactme';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Aboutme></Aboutme>}/>
          <Route exact path='/Education' element={<Education></Education>}/>
          <Route exact path='/Projects' element={<Projects></Projects>}/>
          <Route exact path='/Achievements' element={<Achievements></Achievements>}/>
          <Route exact path='/Contactme' element={<Contactme></Contactme>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
