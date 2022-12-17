import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TopContent = styled.header`
    margin: 40px auto;
    padding: 30px;
    width: 100%;
    height: 170px;
    background: #6364A5;
    box-shadow: 0px 6px 16px #D7D7D7;
    border-radius: 4px;
    h1 {
        margin: 0;
        padding: 0;
        color: #fff;
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
    }
`;

const ActionsBar = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    align-items: end;
    input {
        margin-top: 20px;
        padding: 10px 20px;
        width: 100%;
        height: 40px;
        background: #FFFFFF;
        border: none;
        border-radius: 4px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
    button {
        width: 100%;
        height: 40px;
        background-color: #D67D70;
        border: 1px solid #c27165;
        border-radius: 4px;
        color: #fff;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-transform: capitalize;
        cursor: pointer;
        transition: all .3s;
        :hover {
            background-color: #c27165;
        }
    }
`;

function Header({query, handleSearch, switchToEdit, removeActive}) {
    return ( 
        <TopContent>
            <h1>My notes</h1>
                <ActionsBar>
                    <input 
                        type="search" 
                        role="searchbox" 
                        placeholder="Search"
                        value={query}
                        onChange={handleSearch}
                    />

                    <button 
                        onClick={() => {switchToEdit(false); removeActive()}}>
                            <FontAwesomeIcon icon={faPlus} /> Create note
                    </button>
                </ActionsBar>
        </TopContent>

    );
  }
  
  export default Header;

