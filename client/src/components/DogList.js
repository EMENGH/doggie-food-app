import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DogList extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      dogs: []
    }
  }

  componentWillMount(){
    this._fetchDogs();
  }

  _fetchDogs = async () => {
    try {
      const res = await axios.get('/api/dogs');
      await this.setState({dogs: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
    
  }

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
        <h1>All Dogs</h1>
        {this.state.dogs.map(dog => (
          <div>
            <Link to={`/dog/${dog.id}`} >{dog.name}</Link> 
          </div>
        ))}
      </div>
    );
  }
}

export default DogList;