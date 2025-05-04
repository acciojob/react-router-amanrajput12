
import React from "react";
import './../styles/App.css';
import  { Routes ,BrowserRouter, Route, Link} from "react-router-dom"
import About from "./About.js";
import Home from "./Home.js";
import Navigation from "./Navigation.js";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Navigation/>
      
        <Routes>
        
          <Route path="" element={<Home/>}/> 
          <Route path="/about" element={<About/>}/>

          
          
         </Routes>
        
    </div>
  )
}

export default App
