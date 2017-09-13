import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

const DogDiv = styled.div`
    background-image: https://i.imgur.com/kSZEho3.jpg
    img {
    width: 200px;
    height: 200px;
    }
`
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
        <h1>Dog Collection</h1>
        {this.state.dogs.map(dog => (
          <DogDiv>
            <img src={dog.photo_url} alt="dog" />
            <Link to={`/dog/${dog.id}`} >{dog.name}</Link> 
          </DogDiv>
        ))}
      </div>
    );
  }
}

export default DogList;