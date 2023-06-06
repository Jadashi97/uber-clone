import React from 'react';
import tw from 'tailwind-styled-components';

const Login = () => {
  return (
    <Wrapper>
        <Uberlogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
        <Title>
            Login to Access your account
        </Title>
        <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
        <LoginButton>
            Sign in with Google
        </LoginButton>
    </Wrapper>
  )
}

export default Login;


const Wrapper = tw.div`
    flex h-screen flex-col bg-white
`;

const Uberlogo = tw.img`
    h-28 object-contain  self-start w-auto
`;

const Title = tw.div`
    text-6xl text-center text-gray-500
`;

const HeadImg = tw.img`

`;

const LoginButton = tw.div`

`;