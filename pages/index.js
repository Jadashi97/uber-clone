import { useEffect } from "react";
import styles from "../styles/globals.css";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

// use map box to work on the map section
mapboxgl.accessToken = 'pk.eyJ1IjoiamFkYXNoaTk3IiwiYSI6ImNsaTRvODhidzE5dWQzZm8wcmFlc2VvdzkifQ.jfniAC-1WpN--O_DqmP8lA';

export default function Home(){

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [31.571250, 4.8670], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    })


    return (
        <Wrapper>
            <Map id="map"></Map>
            <ActionItems>Start</ActionItems>
        </Wrapper>
    )
}


const Wrapper = tw.div`
    flex flex-col bg-red-300 h-screen

`


const Map = tw.div`
    bg-red-500 flex-1

`


const ActionItems = tw.div`
 flex-1
`

