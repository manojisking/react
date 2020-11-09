import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Layout/Header';
import Main from './Pages/Main';
import Footer from './Layout/footer';

function App() {
  return (
    <BrowserRouter>
    <div id="content">
      <Header/>
      <Main/>
      <Footer/>
    </div>
   
    
    
   
  </BrowserRouter>
  );
}

export default App;
