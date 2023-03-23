import { HashRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AppM from './components/ApplicationManual/AppM'
import About from './components/AboutUs/AboutUs'
import './App.css';

function App() {
  return (
    <div id='App'>
        {/* Router is the parent component of all other components. It is used to route the user to the desired component. */}
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="AppM" element={<AppM/>}/>
                <Route path="about" element={<About/>}/>
            </Routes> 
        </Router>  
    </div>
);
}

export default App
