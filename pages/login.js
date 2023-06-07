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
            <Uberlogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
            <Title>
                Login to Access your account
            </Title>
            <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <LoginButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google
            </LoginButton>
        </Wrapper>
    )
}

export default Login;


const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-100 p-4
`;

const Uberlogo = tw.img`
    h-28 object-contain  self-start w-auto
`;

const Title = tw.div`
    text-5xl text-gray-500
`;

const HeadImg = tw.img`
    object-contain w-full
`;

const LoginButton = tw.div`
    bg-black text-white py-4 mt-8 text-center self-center w-full
`;