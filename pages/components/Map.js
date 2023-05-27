import React, {useEffect} from 'react';

import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

function Map() {
    // use map box to work on the map section
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFkYXNoaTk3IiwiYSI6ImNsaTRvODhidzE5dWQzZm8wcmFlc2VvdzkifQ.jfniAC-1WpN--O_DqmP8lA';

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [31.571250, 4.8670], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    })

    return (
        <Wrapper id="map"></Wrapper>
    )
}


const Wrapper = tw.div`
    flex-1
`

export default Map;
