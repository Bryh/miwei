import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Redirect,  } from "react-router-dom";

import Home from "@views/Home"
import Menu from "@views/Menu"
import Vip from "@views/Vip"
import User from "@views/User"



class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route path="/" exact render = {() => { return <Redirect to ="/home"/> }} ></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/vip" component={Vip}></Route>
            <Route path="/user" component={User}></Route>
          </div>
         
        </Router>

    );
  }
}

export default App;
