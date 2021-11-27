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

class App extends Component {
  render(){
   return (
    <Router>
     <Navbar/>

  
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/otherWishs" element={<OtherWishs/>}/>
      <Route path="/newWish" element={<NewWish/>}/>
    </Routes>

    </Router>
  );
  }
}

export default App;
