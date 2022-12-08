
import styled from 'styled-components';

const Button = styled.button`
    background-color: #D67D70;
    border: none;
    border-radius: 4px;`

function Header() {
    return ( 
        <header>
            <h1 className="title">My notes</h1>
                <div className="actions-bar">
                    <input className="search-input" type="search" role="searchbox" placeholder="Search"></input>
                    <Button>Test</Button>
                    {/* <button className="add-btn"><i className="fa-solid fa-plus"></i> Add note</button> */}
                </div>
        </header>

    );
  }
  
  export default Header;

//   aria-description="search results will appear below"

