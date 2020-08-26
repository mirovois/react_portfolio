import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Resume from "./components/Resume";
import ContactPage from "./components/ContactPage";
import { makeStyles } from "@material-ui/styles";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
  screen: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contacts" component={ContactPage} />
        <Layout>
          <Switch>
            <Particles
              canvasClassName={classes.screen}
              params={{
                particles: {
                  number: {
                    value: 85,
                    density: {
                      enable: true,
                      value_area: 1000,
                    },
                  },
                  size: {
                    value: 5,
                    random: true,
                  },
                  shape: {
                    type: "star",
                    stroke: {
                      width: 1,
                      color: "red",
                    },
                  },
                },
              }}
            />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
