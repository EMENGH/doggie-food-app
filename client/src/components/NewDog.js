import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const LabelStyles = styled.label`
form input {    
text: red;
}
`;

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
width: 120px;
margin: 0 auto;
button {
   align-self: center;
}
`

class NewDog extends Component {
  constructor(props){
    super(props);
      this.state = {
        redirect: false,
        dog: {
          name: '',
          breed: '',
          size: '',
          photo_url: ''
        }
      }
  this._handleChange = this._handleChange.bind(this);
  this._addDog = this._addDog.bind(this);
  };
  _handleChange = (e) => {
    const newState = {...this.state.dog};
      newState[e.target.name] = e.target.value;
      this.setState({
          dog: newState
      });
  }
    
  _addDog = async (e) => {
    e.preventDefault();
    const payload = this.state.dog
    try {
        const res = await axios.post('/api/dogs', payload)
        console.log(res)
        const dogId = res.data.id;
        const redirect = !this.state.redirect
        this.setState({dogId})
        this.setState({ redirect })
    } 
      catch (err) {
          console.log(err)
      }
  }
      
  render() {
    return (
      <div>
        <Form onSubmit={this._addDog}>
            <div>
            <label htmlFor="name">Name: </label>
            <input  type="text" name="name" value={this.state.dog.name} onChange={this._handleChange}/>
            </div>
            <div>
            <label htmlFor="breed">breed: </label>
            <input onChange={this._handleChange} type="text" name="breed" value={this.state.dog.breed} />
            </div> 
            <div>
            <label htmlFor="size">size: </label>
            <input onChange={this._handleChange} type="text" name="size" value={this.state.dog.size} />
            </div> 
            <div>
            <label htmlFor="photo_url">photo_url: </label>
            <input onChange={this._handleChange} type="text" name="photo_url" value={this.state.dog.photo_url} />
            </div> 
            <button>Add New Dog</button>
        </Form>
        {this.state.redirect && (
          <Redirect to={`/dogs/${this.state.dogId}`}/>
        )}
    </div>
    )
  }
}

export default NewDog;