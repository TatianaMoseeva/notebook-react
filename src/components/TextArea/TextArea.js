import styled from 'styled-components';


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
    return text.slice(0, 15) + '...';
}

function TextArea({showNote, editNote, addNote, editMode}) {


    let elem;
    if (!editMode) {
        elem =  <TextField 
                    placeholder="Note" 
                    value={showNote()}
                    onChange={event => editNote(event)}
                    onBlur={(event) => addNote(makeTitle(event.target.value), event.target.value)}
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