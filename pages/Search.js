import React from 'react';
import tw from 'tailwind-styled-components';


const Search = () => {
  return (
    <Wrapper>
        <ButtonContainer>
            <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
        </ButtonContainer>
        <InputContainer>
            <FromToIcons>
                <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>
                <VerticalLine src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'/>
                <Square src='https://img.icons8.com/windows/50/000000/square-full.png'/>
            </FromToIcons>
            <InputBoxes>
                <Input placeholder='Enter PickUp location?'/>
                <Input placeholder='Where to ?'/>
            </InputBoxes>
            <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png'/>
        </InputContainer>
        {/* Button container */}
        {/* input container */}
        {/* saved places */}
        {/* confirm button */}
    </Wrapper>
  )
}

export default Search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
    bg-white px-4
`;

const BackButton = tw.img`
    h-12
`;

const FromToIcons = tw.div`
    w-10 flex flex-col
`;

const InputContainer = tw.div`
    bg-white flex
`;

const Circle = tw.img`

`;

const VerticalLine = tw.img`

`;

const Square = tw.img`

`;

const InputBoxes = tw.div`
    flex flex-col flex-1
`;

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2  p-2 outline-none border-none
`;

const PlusIcon = tw.img`

`