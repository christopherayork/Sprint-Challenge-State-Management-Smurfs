import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
  width: 20%;
`;

export default function Smurf(props) {
  const smurf = props.smurf;
  return (
      <SmurfDiv>
        <h2>{smurf.name}</h2>
        <span>Age: {smurf.age}</span><br />
        <span>Height: {smurf.height}</span>
      </SmurfDiv>
  );
}