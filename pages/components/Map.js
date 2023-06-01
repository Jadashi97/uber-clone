import React, {useEffect} from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

function Map(props) {
    // use map box to work on the map section
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFkYXNoaTk3IiwiYSI6ImNsaTRvODhidzE5dWQzZm8wcmFlc2VvdzkifQ.jfniAC-1WpN--O_DqmP8lA';

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', // style URL
            // style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [31.571250, 4.8670], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates);
        }

        if(props.dropOffCoordinates){
            addToMap(map, props.dropOffCoordinates)
        }

        // zooms the map so the new visible area of the map fits within the specified geographical bounds.
        if(props.pickupCoordinates && props.dropOffCoordinates){
            map.fitBounds([
                props.pickupCoordinates,
                props.dropOffCoordinates
                ],{
                    padding: 60,
                }                
                );
        }

    }, [props.pickupCoordinates, props.dropOffCoordinates]);

    const addToMap = (map, coordinates)=> {
        // Create a new marker.
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
    }




    return (
        <Wrapper id="map"></Wrapper>
    )
}


const Wrapper = tw.div`
    flex-1
`

export default Map;
