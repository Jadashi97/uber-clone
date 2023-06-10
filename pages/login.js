import React, {useEffect} from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import {auth, provider} from "../firebase";

const Login = () => {
    const router = useRouter();

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if(user){
                router.push('/')
            }else{
                console.log("locate user")
            }
        })
    }, [])

    return (
        <Wrapper>
            <HeaderContainer>
                <YallaLogo 
                    src="https://cdn.pixabay.com/photo/2016/12/01/09/04/tuk-tuk-1874740_640.jpg"
                    onClick={() => signInWithPopup(auth, provider)}
                />
                <CompanyName>
                    YA-LA!
                </CompanyName>
                <YallaLogo2 
                    src="https://cdn.pixabay.com/photo/2023/04/10/17/33/motorbike-7914313_640.png"
                    onClick={() => signInWithPopup(auth, provider)}
                />
            </HeaderContainer>
            <Description>
                Why wait ? Order & Ride with us!
            </Description>
            <Title>
                Login to Access your YA-LA account!
            </Title>
            <HeadImg src="https://cdn.pixabay.com/photo/2021/01/25/08/05/tuk-tuk-5947585_1280.jpg"/>
            <LoginButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google
            </LoginButton>
        </Wrapper>
    )
}

export default Login;


const Wrapper = tw.div`
    flex flex-col h-screen w-full md: w-auto bg-white p-4
`;

const HeaderContainer = tw.div`
    flex flex-1 justify-between
`;

const YallaLogo = tw.img`
    h-32 ml-6 object-contain  self-start w-auto bg-white transform hover:scale-105
`;

const YallaLogo2 = tw.img`
    h-28 mr-6 object-contain  self-end w-auto bg-white transform hover:scale-105
`;

const CompanyName = tw.div`
    text-6xl text-black p-4 mt-8 text-center bg-gradient-to-r from-purple-400 md:from-yellow-500
`;
const Title = tw.div`
    text-3xl text-gray-500 p-8 text-center mb-8
`;

const Description = tw.div`
    text-2xl text-center p-6 font-style: italic text-yellow-600 
`;

const HeadImg = tw.img`
    object-contain w-full blur-sm transition ease-in-out delay-100 hover:scale-105 hover:blur-none
`;

const LoginButton = tw.div`
    bg-black text-white p-4 m-8 text-center self-center w-full cursor-pointer
`;