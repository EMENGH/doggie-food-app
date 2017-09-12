import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DogList from "./components/DogList";
import Dog from "./components/Dog";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Doggie Food App</h1>
            <div>
              <Link to="/">Dogs</Link>
              <Link to="/dog/1">Dog</Link>
            </div>
          </div>
          <Route exact path="/" component={DogList} />
          <Route path="/dog/:id" component={Dog} />
        </div>
      </Router>
    );
  }
}

export default App;
