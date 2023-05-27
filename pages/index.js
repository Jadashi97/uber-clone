import styles from "../styles/globals.css";
import Map from "./components/Map";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";


export default function Home(){

    return (
        <Wrapper>
            <Map/>
            <ActionItems>
                {/* header */}
                <Header>
                    <UberLogo src="https://www.citypng.com/public/uploads/preview/uber-text-word-white-logo-png-116636032551bv8psou6e.png"/>
                </Header>
                {/* Buttons */}
                {/* InputButton */}
                
            </ActionItems>
        </Wrapper>
    )
}


const ActionItems = tw.div`
    flex-1
`

const Wrapper = tw.div`
    flex flex-col h-screen
`

const Header = tw.div`

`

const UberLogo = tw.img`
    h-28 bg-none
`