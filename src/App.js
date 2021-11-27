import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Wishlist from './components/Wishlist';
import OtherWishs from './components/OtherWishs';
import NewWish from './components/NewWish';
import Footer from './components/Footer'

class App extends Component {
  render(){
   return (
    <Router>
    <div className="mainContainer">
     <Navbar/>

  
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/otherWishs" element={<OtherWishs/>}/>
      <Route path="/newWish" element={<NewWish/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
  }
}

export default App;
