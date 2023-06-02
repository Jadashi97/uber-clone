import React from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList';

const RideSelector = () => {
  return (
    <Wrapper>
        <Title>Choose a ride/Swipe up for more </Title>
        <RideList>
                { carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>$24.00</Price>
                    </Car>
                )) }

        </RideList>
    </Wrapper>
  )
}

export default RideSelector;


const Wrapper = tw.div`
    flex-1 flex-col overflow-y-scroll flex

`;

const Car= tw.div`
    flex p-4 items-center
`;

const Title = tw.div`
    py-2 text-center text-xs text-gray-500 border-b
`;

const RideList = tw.div`
overflow-y-scroll
`;

const CarImage = tw.img`
    h-28 mr-4
`;

const CarDetails = tw.div`
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