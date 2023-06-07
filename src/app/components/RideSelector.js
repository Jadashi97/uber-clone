import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../../../public/data/carList';

const RideSelector = ({pickupCoordinates, dropOffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0);

    // get ride duration from MAPBOX API
    // 1. pickupCoordinates
    // 2. dropoffCoordinates

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoiamFkYXNoaTk3IiwiYSI6ImNsaTRvODhidzE5dWQzZm8wcmFlc2VvdzkifQ.jfniAC-1WpN--O_DqmP8lA`
                );
                const data = await response.json();
                setRideDuration(data.routes[0].duration / 100)
            } catch (error) {
                console.log(error);
            }
        }
       fetchData();
    }, [pickupCoordinates, dropOffCoordinates])

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
                            <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
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