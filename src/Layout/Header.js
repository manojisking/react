import React from 'react'
import logo from './logo.png';

 function Header() {
    return (

        
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div class=" container-fluid">
            <a class="navbar-brand" href="#"><img src={logo} alt="Logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
        
                <li class="nav-item active mr-4">
                  <a class="nav-link" href="./Home">Home </a>
                </li>
        
                <li class="nav-item mr-4">
                  <a class="nav-link" href="#">Photos</a>
                </li>
                
                <li class="nav-item mr-4">
                  <a class="nav-link" href="#">Services</a>
                </li>
        
                <li class="nav-item mr-4">
                    <a class="nav-link" href="#">Members</a>
                </li>
                 
                <li class="nav-item mr-4">
                    <a class="nav-link" href="./Login">Logout</a>
                </li>
        
              </ul>
              
            </div>
            </div>
          </nav>
      
    )
}
export default Header