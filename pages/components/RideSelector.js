import React from 'react';
import tw from 'tailwind-styled-components';


const RideSelector = () => {
  return (
    <Wrapper>
        <Title>Choose a ride/Swipe up for more </Title>
        <RideList>
            <SelectedRide>
                <RideImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                <RideDetails>
                    <Service>UberX</Service>
                    <Time>5 mins away</Time>
                </RideDetails>
                <Price>200 SSP</Price>
            </SelectedRide>
        </RideList>
    </Wrapper>
  )
}

export default RideSelector;


const Wrapper = tw.div`
    flex-1 flex-col

`;

const SelectedRide= tw.div`
    p-10  bg-gray-200 flex justify-evenly items-center
`;

const Title = tw.div`
    py-2 text-center text-xs text-gray-500 border-b
`;

const RideList = tw.div`
`;

const RideImage = tw.img`
    h-28 mr-4
`;

const RideDetails = tw.div`
    flex-1
`;

const Service = tw.div`
    font-medium
`;

const Time = tw.div`
    text-xs text-blue-500
`;

const Price = tw.div`
    text-sm
`;