import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DogList from "./components/DogList";
import Dog from "./components/Dog";
import NewDog from './components/NewDog';
import EditDog from './components/EditDog'
import GlobalNav from './components/GlobalNav.js';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <GlobalNav />
            {/* <div>
              <Link to="/">Dogs</Link>
              <Link to="/dog/1">Dog</Link>
            </div> */}
          </div>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/dogs" component={DogList} />
          <Route exact path="/dog/:id" component={Dog} />
          <Route exact path="/dogs/new" component={NewDog}/>
          <Route exact path="/dogs/:id/edit" component={EditDog}/>
        </div>
      </Router>
    );
  }
}

export default App;
