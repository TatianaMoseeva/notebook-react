import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CreateBtn = styled.button`
    width: 100%;
    height: 40px;
    box-shadow: 0px 6px 16px #D7D7D7;
    border: 2px solid #D67D70;
    border-radius: 4px;
    color: #D67D70;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    cursor: pointer;
    transition: all .3s;

    :hover {
        background-color: #D67D70;
        color: #fff;
    }
`;

function AddNew({switchToEdit}) {
     
    return ( 
        <CreateBtn
            onClick={() => switchToEdit(false)}
        ><FontAwesomeIcon icon={faPlus} /> Add Note</CreateBtn> 
    );
  }

export default AddNew;