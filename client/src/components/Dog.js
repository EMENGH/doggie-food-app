import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const DogStyles = styled.div`
    img {
        max-height: 400px;
        width: 100%;
    }
`;

class Dog extends Component {
  constructor(){
    super();
    this.state = {
      dog: {},
      songs: []
    }
  }

  componentWillMount(){
    this._fetchDogAndFoods();
  }

  _fetchDogAndFoods = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/dogs/${id}`)
    this.setState({
      dog: res.data.dog,
      foods: res.data.foods
    })
  }

  render(){
    return (
      <DogStyles>
        <img src={this.state.dog.photo_url} />
        <h1>{this.state.dog.name}</h1>
        <h4>breed: {this.state.dog.breed}</h4>
        <h3>Foods</h3>
        {this.state.foods.map(food => (
          <div key={food.id}>
            <p>Brand: {food.brand}</p>
            <p>Breed: {food.breed}</p>
            <p>Size: {food.size}</p>
            <p>Link: {food.link_url}</p>
          </div>
        ))}
      </DogStyles>
    )
  }
}
export default Dog;