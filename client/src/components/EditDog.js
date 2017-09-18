import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

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
    width: 210px;
    margin: 0 auto;
    button {
        align-self: center;
    }
`

class EditDog extends Component {
    constructor(props) {
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
        this._editDog = this._editDog.bind(this);
     }
    
    componentWillMount() {
        const dogId = this.props.match.params.id
        this._fetchDog(dogId)       
    }

    _fetchDog = async (dogId) => {
        try {
            const res = await axios.get(`/api/dogs/${dogId}`)
            await this.setState({
                dog: {
                    name: res.data.name,
                    breed: res.data.breed,
                    size: res.data.size,
                    photo_url: res.data.photo_url
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }   

    _editDog = async (e) => {
        e.preventDefault();
        const dog = this.state.dog
        const dogId = this.props.match.params.id
        try {
            const res = await axios.patch(`/api/dogs/${dogId}`, dog)
            this.setState({ redirect: true })
            return res.data
        } 
        catch (err) {
            console.log(err)
        }
    }

    _deleteDog = async (e)=>{
        const id = this .props.match.params.id;
        try{
            const res = await axios.delete(`/api/dogs/${id}`)
            this.setState({redirect: true})
        } catch(err){
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.dog}
        newState[e.target.name] = e.target.value
        this.setState({
            dog: newState
        })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={`/dogs`}/>
            )
                } else {
      return (
        <LabelStyles>
            <div>
                <h1>Edit Dog</h1>
                <Form onSubmit={this._editDog}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.dog.name} />
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
                    <button>SUBMIT</button>
                </Form>
                {/* {this.state.redirect && (<Redirect to={`/dogs/`}/>
                )} */}
                <button onClick={this._deleteDog}>DELETE</button>

            </div>
            </LabelStyles>
        )
    }
}
}


export default EditDog;
