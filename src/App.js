import React from 'react';
import './App.css';
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  
  return (
    <Router>
      <div className="App">
      <Layout>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/resume" />
        </Switch>
      </Layout>
      </div>
    
    </Router>
  )
}

export default App;
