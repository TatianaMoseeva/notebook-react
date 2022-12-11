import styled from 'styled-components';
import {useState} from 'react';

const TextField = styled.textarea`
    padding: 20px;
    resize: none;
    background: #F2F2F2;
    border: 1px solid #D7D7D7;
    border-radius: 4px;

    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`;

function makeTitle(text) {
    if (text.length > 15) {
        return text.slice(0, 15) + '...';
    } return text;
    
}

function TextArea({showNote, editNote, addNote, editMode}) {
    const [value, setValue] = useState('');

    let elem;
    if (!editMode) {
        elem =  <TextField 
                    placeholder="Note" 
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onBlur={(event) => {addNote(makeTitle(event.target.value), event.target.value); setValue('')}}
                />
    } else {
        elem =  <TextField 
                    placeholder="Note" 
                    value={showNote()}
                    onChange={event => editNote(event)}
                /> 
    }


    return <>
       {elem}
    </>
 

  }

  export default TextArea;