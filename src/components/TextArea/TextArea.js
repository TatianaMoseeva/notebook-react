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


function TextArea({showNote, editNote, addNote}) {

    const [addNewMode, setAddNewMode] = useState(null);

    let elem;
    if (!addNewMode) {
        elem =  <TextField 
                    placeholder="Note" 
                    value={showNote()}
                    onChange={event => editNote(event)}
                    onBlur={(event) => addNote('test', event.target.value)}
                />
    } else {
        elem =  <TextField 
                    placeholder="Note" 
                    value={showNote()}
                    onChange={event => editNote(event)}
                /> 
    }


    return ( <>
       {elem}
    </>
 
    );
  }

  export default TextArea;