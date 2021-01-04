import React, {useEffect, useState} from "react";
import Layout from "./components/Layout/Layout";
import Projects from "./components/ProjectsPage/ProjectsPage";
import Home from "./components/HomePage/HomePage";
import Resume from "./components/ResumePage/ResumePage";
import ContactMe from './components/ContactPage/ContactMe'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import bgr from './images/bgr.jpg';
import "./App.css";

const useProgressiveImage = src => {  
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])

  return sourceLoaded 
}

const App = () => {

  const loaded = useProgressiveImage(bgr)

  return (
    
      <Router>
        <div className="app" style={{background:` radial-gradient(
        at center center, rgba(15, 100, 106, 0.28), rgba(19, 91, 96, 0.65)),
        url(${loaded})`}}>
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
