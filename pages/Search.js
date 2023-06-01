import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';


const Search = () => {

    const [pickUp, setPickUp] = useState(" ");
    const [dropOff, setDropOff] = useState(" ");

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href={"/"}>
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcons>
                    <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>
                    <VerticalLine src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'/>
                    <Square src='https://img.icons8.com/windows/50/000000/square-full.png'/>
                </FromToIcons>
                <InputBoxes>
                    <Input 
                        placeholder='Enter PickUp location?'
                        value={pickUp}
                        onChange={(e)=>setPickUp(e.target.value)}
                    />
                    <Input 
                        placeholder='Where to ?'
                        value={dropOff}
                        onChange={(e)=> setDropOff(e.target.value)}
                    />
                </InputBoxes>
                <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png'/>
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                Saved Places
            </SavedPlaces>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickUp: pickUp,
                    dropOff: dropOff

                }
            }}>
                <ComfirmButtonContainer>
                    {/* <ComfirmButton> */}
                        Confirm Locations
                    {/* </ComfirmButton> */}
                </ComfirmButtonContainer>
            </Link>
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
    w-10 flex flex-col mr-2 items-center
`;

const InputContainer = tw.div`
    bg-white flex items-center px-4 
`;

const Circle = tw.img`
    h-2.5
`;

const VerticalLine = tw.img`
    h-10
`;

const Square = tw.img`
    h-3
`;

const InputBoxes = tw.div`
    flex flex-col flex-1
`;

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2  p-2 outline-none border-none
`;

const PlusIcon = tw.img`
    h-10 w-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

// const ComfirmButton = tw.button`
//     bg-black text-white  p-2 w-full m-4 color-white rounded-full
// `;

const ComfirmButtonContainer = tw.div`
    bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`;