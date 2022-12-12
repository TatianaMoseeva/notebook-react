import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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

const Circle = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 100%;
    color: #D7D7D7;
    transition: all .3s;
    :hover {
        color: #b5b5b5;
    }
    cursor: pointer;
`;

function makeTitle(text) {
    if (text.length > 15) {
        return text.slice(0, 15) + '...';
    } return text;
    
}

function TextArea({showNote, editNote, addNote, editMode, removeNote, switchToEdit}) {
    const [value, setValue] = useState('');

    let elem;
    if (!editMode) {
        elem =  <>
                    <TextField 
                        placeholder="Note" 
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        onBlur={(event) => {addNote(makeTitle(event.target.value), event.target.value); setValue('')}}
                    />
            </>
        
    } else {
        elem =  <>
                    <TextField 
                                placeholder="Note" 
                                value={showNote()}
                                onChange={event => editNote(event)}
                            /> 
                    <Circle>
                        <FontAwesomeIcon icon={faTrash} onClick={() => {removeNote(); switchToEdit(false)}}/>
                    </Circle>
                </>
    }

    return <>
       {elem}
    </>
 

  }

  export default TextArea;