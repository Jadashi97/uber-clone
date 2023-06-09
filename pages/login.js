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
    }, [router])

    return (
        <Wrapper>
            <YallaLogo src="https://cdn.pixabay.com/photo/2016/12/01/09/04/tuk-tuk-1874740_640.jpg"/>
            <Title>
                Login to Access your YALLA account!
            </Title>
            <HeadImg src="https://cdn.pixabay.com/photo/2022/02/10/21/18/tricycle-7006191_640.jpg"/>
            {/* <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png"/> */}
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
    text-5xl text-gray-500 p-10
`;

const HeadImg = tw.img`
    object-contain w-full blur-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-500
`;

const LoginButton = tw.div`
    bg-black text-white py-4 mt-8 text-center self-center w-full cursor-pointer
`;