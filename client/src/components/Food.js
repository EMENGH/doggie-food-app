import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dog from './Dog';
import axios from 'axios';
import styled from 'styled-components'

const FoodStyles = styled.div`
    img {
        max-height: 450px;
        width: 30%;
        margin: 20px;
        font-size: 20px;
     }
 `;

class Food extends Component {
       constructor(){
       super();
       this.state = {
       dogs: [],
       food: []
       }
   }
componentWillMount(){
     this._fetchFoodAndDogs();
}

_fetchFoodAndDogs = async () => {
         const id = this.props.id;
         const res = await axios.get(`/api/dogs/${id}/foods`)
         console.log(res.data)
         this.setState({
         food: res.data
         })
         return res.data
    }

    render() {
        const id = this.props.id;
        console.log(this.state.food)
        return (
            <FoodStyles>
               {/* <img src={this.state.dog.photo_url} />
               <h1>{this.state.dog.name}</h1>
               <Link to={`/dogs/${id}/edit`}>Edit</Link>
               <h4>breed: {this.state.dog.breed}</h4> */}
                {/* <h3>Foods</h3> */}
                {this.state.food.map(food => (
                <div key={food.id}>
                <p>Brand: {food.brand}</p>
                <p>Breed: {food.breed}</p>
                <p>Size: {food.size}</p>
                <p>Link: {food.link_url}</p>
               </div>
             ))}
            </FoodStyles>

        );
    }
}

export default Food;



