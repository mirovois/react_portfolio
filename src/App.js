import React from "react";
import Layout from "./components/Layout/Layout";
import Projects from "./components/ProjectsPage/ProjectsPage";
import Home from "./components/HomePage/HomePage";
import Resume from "./components/ResumePage/ResumePage";
import ContactMe from './components/ContactPage/ContactMe'
// import Contact from "./components/ContactPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    
      <Router>
        <div className="app">
          <Layout />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contacts" component={ContactMe} />
          </Switch>
        </div>
      </Router>
    
  );
};

export default App;
