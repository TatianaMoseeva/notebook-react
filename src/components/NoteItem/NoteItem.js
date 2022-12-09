import styled from 'styled-components';

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

function NoteItem({id, title, active, toggleActive, switchToEdit}) {
    let activeClass = '';
    if (active) {
        activeClass+= ' active';
    }

    return ( 
        <NavButton 
            className={activeClass}
            onClick={() => {toggleActive(id); switchToEdit()}}
        >
            {title}</NavButton> 
    );
  }

  export default NoteItem;