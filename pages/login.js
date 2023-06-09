import React, {useEffect} from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import {auth, provider} from "../firebase";

const Login = () => {
    const router = useRouter();

    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
            <YallaLogo src="https://cdn.pixabay.com/photo/2016/12/01/09/04/tuk-tuk-1874740_640.jpg"/>
            <Title>
                Login to Access your YALLA account!
            </Title>
            <HeadImg src="https://cdn.pixabay.com/photo/2022/02/10/21/18/tricycle-7006191_640.jpg"/>
            <LoginButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google
            </LoginButton>
        </Wrapper>
    )
}

export default Login;


const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-white p-4
`;

const YallaLogo = tw.img`
    h-32 object-contain  self-start w-auto bg-white transform hover:scale-105
`;

const Title = tw.div`
    text-4xl text-gray-500 p-10
`;

const HeadImg = tw.img`
    object-contain w-full blur-sm transition ease-in-out delay-150 transform hover:scale-105 hover:scale-110 hover:blur-none
`;

const LoginButton = tw.div`
    bg-black text-white py-4 mt-8 text-center self-center w-full cursor-pointer
`;