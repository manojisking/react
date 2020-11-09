
import React from 'react';
import {Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Booking from './Booking';


 function Main() {
    return (
        <main role="main">
            
            <Route path='/Home' component={Home}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path='/Booking' component={Booking}></Route>


        </main>
    )
}

export default Main