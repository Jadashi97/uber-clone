import { useEffect, useState } from "react";
import styles from "../styles/globals.css";
import Map from "../components/Map";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";


export default function Home(){

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(()=> {
        return onAuthStateChanged(auth, user => {
            if(user){
                setUser({
                    name: user.displayName,
                    photoUrl: user.photoURL,
                })
            } else {
                setUser(null)
                router.push('/login')
            }
        })
    }, [])

    return (
        <Wrapper>
            <Map/>
            <ActionItems>
                {/* header */}
                <Header>
                    {/* <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/> */}
                    <YallaLogo src="https://cdn.pixabay.com/photo/2016/12/01/09/04/tuk-tuk-1874740_640.jpg"/>
                    <Profile>
                        <Name>{user && user.name}</Name>
                        <UserImage 
                            src={user && user.photoURL}
                            onClick={()=> signOut(auth)}
                        />
                    </Profile>
                </Header>
                <ActionButtons>
                        <ActionButton>
                            <Link href="/Search">
                                <ActionButtonImg src="https://cdn.pixabay.com/photo/2023/04/10/17/33/motorbike-7914313_640.png"/>
                            </Link>
                                Boda Boda
                            </ActionButton>
                        <ActionButton>
                                <Link href="/Search">
                                    <ActionButtonImg src="https://cdn.pixabay.com/photo/2016/03/31/21/15/rickshaw-1296278_640.png"/>
                                </Link>
                                   Ricksha
                        </ActionButton>
                </ActionButtons>
                <InputButton>
                    <Link href={"/Search"}>
                        Where to?
                    </Link>
                </InputButton>
                {/* Buttons */}
                {/* InputButton */}
                
            </ActionItems>
        </Wrapper>
    )
};

const Wrapper = tw.div`
    flex flex-col h-screen bg-white

`;

const Input = tw.div`

`

const ActionItems = tw.div`
    flex-1 p-4

`;

const Header = tw.div`
    flex justify-between items-center p-2
`;

const YallaLogo = tw.img`
    h-28

`;

const Profile = tw.div`
    flex items-center
`;

const Name = tw.div`
    mr-4 w-20 text-sm
`;

const UserImage = tw.img`
    h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`;

const ActionButtons = tw.div`
    flex m-1 p-1
`
const ActionButton = tw.div`
flex bg-gray-100 flex-1 m-2 h-36 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImg = tw.img`
    h-3/5 h-28 mb-2
`;

const InputButton = tw.div`
    h-20 bg-gray-200 text-2xl p-4 flex item-center justify-center mt-8
`;

