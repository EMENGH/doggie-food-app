    import React, { Component } from 'react';
    import { Link } from 'react-router-dom';
    import Food from './Food';
    import axios from 'axios';
    import styled from 'styled-components'

    const DogStyles = styled.div`
        img {
            max-height: 450px;
            width: 30%;
            margin: 20px;

        }
    `;

    class Dog extends Component {
    constructor(){
        super();
        this.state = {
        dog: {},
        foods: []
        }
    }

    componentWillMount(){
        this._fetchDogAndFoods();
    }

    _fetchDogAndFoods = async () => {
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/dogs/${id}`)
        console.log(res.data)
        this.setState({
        dog: res.data
        })
        return res.data
        
    }

    render(){
        const id = this.props.match.params.id;
        console.log(this.state.dog)
        return (
        <DogStyles>
            <img src={this.state.dog.photo_url} />
            <h1>{this.state.dog.name}</h1>
            <Link to={`/dogs/${id}/edit`}>Edit</Link>
            <h4>breed: {this.state.dog.breed}</h4>
            <h3>Foods</h3>
            {this.state.foods.map(food => (
            <div key={food.id}>
                <p>Brand: {food.brand}</h3>
                <p>Breed: {food.breed}</p>
                <p>Size: {food.size}</p>
                <p>Link: {food.link_url}</p>
            </div>
            ))}
            <Food id={this.props.match.params.id}/>
        </DogStyles>
        )
    }
    }
    export default Dog;