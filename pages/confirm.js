import React from 'react';
import Map from "./components/Map";
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

const confirm = () => {
  return (
    <Wrapper>
        <Map/>
        <RideContainer>
            Rides
        </RideContainer>
      
    </Wrapper>
  )
}

export default confirm;


const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
    flex-1 p-4
`;