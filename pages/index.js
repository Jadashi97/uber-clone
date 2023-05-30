import styles from "../styles/globals.css";
import Map from "./components/Map";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Link from "next/link";


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
                <ActionButtons>
                    <Link href={"/Search"}>
                        <ActionButton>
                            <ActionButtonImg src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                            Ride
                        </ActionButton>
                    </Link>
                    <Link href={"/Search"}>
                        <ActionButton>
                            <ActionButtonImg src="https://i.ibb.co/n776JLm/bike.png"/>
                            Wheels
                        </ActionButton>
                    </Link>
                    <Link href={"/Search"}>
                        <ActionButton>
                            <ActionButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
                            Reserve
                        </ActionButton>
                    </Link>
                </ActionButtons>
                <InputButton>
                    Where to?
                </InputButton>
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
    mr-4 w-20 text-xl
`;

const UserImage = tw.img`
    h-16 w-16 rounded-full border border-gray-200 p-px transform hover:scale-105
`;

const ActionButtons = tw.div`
    flex flex-1 mt-8 justify-center justify-between items-center px-4
`
const ActionButton = tw.div`
    flex flex-1 bg-gray-200 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImg = tw.img`
    h-3/5
`;

const InputButton = tw.div`
    mt-8 flex bg-gray-200 h-20 text-2xl p-4 items-center
`;
