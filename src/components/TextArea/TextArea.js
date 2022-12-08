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


function TextArea({notes, showNote}) {

    return ( 
        <TextField placeholder="Note" value={showNote()}/>
    );
  }

  export default TextArea;