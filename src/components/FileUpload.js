import React,{ useState } from 'react'
import styled from 'styled-components';

const Input = styled.input`
    width: inherit;
    display: none;
`;

const Image = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
`;

const InputWrapper = styled.div`
    display:flex;
`;

const Label = styled.label`
    font-size:20px;
    display: ${props => props.file !==0 ? "none" : "unset"};
    cursor: pointer;
`;

export const FileUpload = () => {

    const [file,setFile] = useState(0);
    const uploadFile = (e) => {
        console.log(e);
        setFile(URL.createObjectURL(e.target.files[0]));
        <Label />

    }
    return (
        <InputWrapper>
            <Label htmlFor='fpPp' file={file}> ClickMe!!</Label>
            <Input name="profile" type="file" id="fpPp" onChange={uploadFile}/>
            {file !==0 ? <Image src={file}/> :""}
            
        </InputWrapper>
    )
}
