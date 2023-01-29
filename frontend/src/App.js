import React from 'react';
import './App.css'
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home/Home';
import LiveScreen from './components/livescreen/Livescreen';

const App = () => {
 

  return(
    <div className="App" style={{ height: "100%" }}>
    
    <Routes>
        <Route path='/' element={<Home/>} />        
        <Route path='live' element={<LiveScreen/>} />        
      </Routes>
  </div>
  );
}

export default App;