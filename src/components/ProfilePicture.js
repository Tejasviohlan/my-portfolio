import React from 'react'
import styled from 'styled-components'
import { FileUpload } from './FileUpload';

const PWrapper = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:lightpink;
    position: relative;
    display:felx;
    align-items:center;
    justify-content:center;
    left: 15px;
    top : 15px;

    @media only screen and (max-width: 480px) {
        width: 150px;
        height: 150px;
      }
`;

export const ProfilePicture = () => {
    return (
        <PWrapper>
            <FileUpload />
        </PWrapper>
    )
}
