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
                    <Profile>
                        <Name>Lokose Dan</Name>
                        <UserImage src="https://avatars.githubusercontent.com/u/95899616?s=400&u=d070ae1f6c50171b4c3c258a6070327d77218ca4&v=4" />
                    </Profile>
                </Header>
                {/* Buttons */}
                {/* InputButton */}
                
            </ActionItems>
        </Wrapper>
    )
};

const Wrapper = tw.div`
    flex flex-col h-screen

`;


const ActionItems = tw.div`
    flex-1 p-4

`;

const Header = tw.div`
    flex justify-between items-center
`;

const UberLogo = tw.img`
    h-28

`;

const Profile = tw.div`
    flex items-center
`;

const Name = tw.div`
    mr-4 w-20 text-sm
`;



const UserImage = tw.img`
    h-16 w-16 rounded-full border border-gray-200 p-px
`;
