import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DogStyles = styled.div`
  width: 30%;
  margin: 20px 0; 
  box-shadow: 1px 1px 1px black;
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
  }
`;

const DogCard = (props) => {
  const dog = props.dog;
  return (
    <DogStyles>
      <Link to={`/dog/${dog.id}`}>
        <img src={dog.photo_url} alt={dog.name} />
        <h3>{dog.name}</h3>
      </Link>
    </DogStyles>
  );
};

export default DogCard;
