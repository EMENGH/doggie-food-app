import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

const IndividualDogDiv = styled.div`
    img {
    width: 300px;
    height: 300px;  
    display: block;  
    }
    a {
    color: white;
    text-decoration: none;
    }
   `;

const DogDivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    `;
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
    <div><h1>Dog Collection</h1></div>
      <DogDivContainer>
        {this.state.dogs.map(dog => (
          <IndividualDogDiv>
            <img src={dog.photo_url} alt="dog" />
            <Link to={`/dogs/${dog.id}`} >{dog.name}</Link>
          </IndividualDogDiv>
        ))}
      </DogDivContainer>
    </div>
    );
  }
}

export default DogList;