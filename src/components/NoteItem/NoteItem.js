import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const NavButton = styled.button`
    width: 100%;
    height: 40px;
    background-color: #6364A5;
    box-shadow: 0px 6px 16px #D7D7D7;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    cursor: pointer;
    transition: all .3s;
    :hover {
        background-color: #565794;
    }
    &.active {
        background-color: #D67D70;
        :hover {
            background-color: #c27165;
        }
    }
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

function NoteItem({id, title, active, toggleActive, switchToEdit, removeNote}) {
    let activeClass = '';
    if (active) {
        activeClass+= ' active';
    }

    return ( <>
            <NavButton 
            className={activeClass}
            onClick={() => {toggleActive(id); switchToEdit(true)}}
        >
            {title}
            
        </NavButton> 
        <Circle><FontAwesomeIcon icon={faTrash} onClick={() => removeNote(id)}/></Circle>
    </>

    );
  }

  export default NoteItem;