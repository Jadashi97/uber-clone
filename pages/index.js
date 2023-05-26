import styles from "../styles/globals.css";
import tw from "tailwind-styled-components";


export default function Home(){
    return (
        <Wrapper>
            <Map>Map</Map>
            <ActionItems>Action Items</ActionItems>
        </Wrapper>
    )
}


const Wrapper = tw.div`
    flex flex-col

`


const Map = tw.div`
    bg-red-500

`


const ActionItems = tw.div`

`

