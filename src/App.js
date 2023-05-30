import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'; 
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technologies from './Pages/Technologies'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App  h-screen bg-black">
      <Router> 

        <Routes>
            <Route path='/' element={<Navbar/>} >
            <Route path='' element={<Home/> } /> 
            <Route path='destination' element={<Destination/> } /> 
            <Route path='crew' element={<Crew/> } /> 
            <Route path='technologies' element={<Technologies/> } /> 
            </Route>


            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
