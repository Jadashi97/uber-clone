import { useEffect, useState } from 'react';
import Map from "./components/Map";
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';

const Confirm = () =>  {
    const router  = useRouter();

    const {pickUp, dropOff} = router.query;

    const [pickupCoordinates, setpickUpCoordinates] = useState();
    const [dropOffCoordinates, setDropOffCoordinates] = useState();

    async function getPickUpCoordinates(pickUp){
        // const pickUp = "Munuki Central";
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


    async function getDropOffCoordinates(dropOff){
        // const dropOff = "Gudele";

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
     getPickUpCoordinates(pickUp);
     getDropOffCoordinates(dropOff);
    }, [pickUp, dropOff])

    return (
        <Wrapper>
            <Map
                // pass it in as props
                pickupCoordinates={pickupCoordinates}
                dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer>
                <RideSelector/>
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Comfirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        
        </Wrapper>
    )
}

export default Confirm;


const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
    border-t-2
`;

const ConfirmButton = tw.div`
    bg-black text-white text-center m-4 py-4 text-xl
`;