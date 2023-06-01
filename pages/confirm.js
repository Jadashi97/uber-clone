import { useEffect, useState } from 'react';
import Map from "./components/Map";
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

const Confirm = () => {

    const [pickupCoordinates, setpickUpCoordinates] = useState();
    const [dropOffCoordinates, setDropOffCoordinates] = useState();

    async function getPickUpCoordinates(){
        const pickUp = "juba";
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?`+ 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiamFkYXNoaTk3IiwiYSI6ImNsaTRvODhidzE5dWQzZm8wcmFlc2VvdzkifQ.jfniAC-1WpN--O_DqmP8lA",
                limit: 1
            })
        );
        const jsonData = await response.json();
        // console.log(jsonData.features[0].center);
        setpickUpCoordinates(jsonData.features[0].center);
    }


    async function getDropOffCoordinates(){
        const dropOff = "rajaf";

        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` + 
            new URLSearchParams({
                access_token:"pk.eyJ1IjoiamFkYXNoaTk3IiwiYSI6ImNsaTRvODhidzE5dWQzZm8wcmFlc2VvdzkifQ.jfniAC-1WpN--O_DqmP8lA",
                limit:1
            })
        
        );
        const jsonData = await response.json();
        // console.log(jsonData.features[0].center)
        setDropOffCoordinates(jsonData.features[0].center);

    }

    useEffect(() => {
     getPickUpCoordinates();
     getDropOffCoordinates();
    }, [])

    return (
        <Wrapper>
            <Map
                // pass it in as props
                pickupCoordinates={pickupCoordinates}
                dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer>
                Rides
                {pickupCoordinates}
                {dropOffCoordinates}
            </RideContainer>
        
        </Wrapper>
    )
}

export default Confirm;


const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
    flex-1 p-4
`;