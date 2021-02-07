import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Userform from "./Components/Userform";
import Userlist from './Components/Userlist';
import Navbar from './Components/Navbar';

function App() {
  return (
         <>
         <Router>
         <Navbar/>
         <Switch>
           <Route exact path="/" component={Userform}/>
           <Route exact path="/userlist" component={Userlist}/>
         </Switch>
         </Router>
         </>
  );
}

export default App;
