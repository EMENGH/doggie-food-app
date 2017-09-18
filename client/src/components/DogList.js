import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const IndividualDogDiv = styled.div`
    img {
      width: 340px;
      height: 370px;  
      display: block;  
    }
    a {
      color: black;
      font-size: 22px;
      text-decoration: none;
    }
   `;
const ButtonContainer = styled.div`
    display: flex; 
    align-self: flex    -end;
    margin: 10px 0px;
    padding: 10px;
    button {
      width: 100px;
      height: 40px;
      background-color: rgba(2,100, 150, 2);
      color: white;
      font-size: 16px;
      border-radius: 8px;
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
    <ButtonContainer>
      <Link to={'/new'}><button>Add Dog</button></Link>
    </ButtonContainer>
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