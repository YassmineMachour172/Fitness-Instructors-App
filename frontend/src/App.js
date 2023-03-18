import { HashRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div id='App'>
        {/* Router is the parent component of all other components. It is used to route the user to the desired component. */}
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                
            </Routes> 
        </Router>  
    </div>
);
}

export default App
