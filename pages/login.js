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
            <YallaLogo 
                src="https://cdn.pixabay.com/photo/2016/12/01/09/04/tuk-tuk-1874740_640.jpg"
                onClick={() => signInWithPopup(auth, provider)}
            />
            <Description>
                Why wait ? Your Ride could be at Your Door in minutes!
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

const YallaLogo = tw.img`
    h-32 object-contain  self-start w-auto bg-white transform hover:scale-105
`;

const Title = tw.div`
    text-4xl text-gray-500 p-8 text-center
`;

const Description = tw.div`
    text-1.8xl text-gray-600 text-center p-6
`;

const HeadImg = tw.img`
    object-contain md: w-auto blur-sm transition ease-in-out delay-100 hover:scale-105 hover:blur-none
`;

const LoginButton = tw.div`
    bg-black text-white p-4 m-8 text-center self-center w-full cursor-pointer
`;