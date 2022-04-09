
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hard from './components/Problems/Hard';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar"
import Easy from './components/Problems/Easy';
import Medium from './components/Problems/Medium';



function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/:id" element={<Easy />} />
        <Route path="/allProblem" element={<Easy />} />
       
       </Routes>
      
     
     
      
    </div>
  );
}

export default App;
