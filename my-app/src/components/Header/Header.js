

function Header() {
    return ( 
        
        <header className="header">
            <h1 className="title">My notes</h1>
            <div className="actions-bar">
                <input className="search-input" type="search" role="searchbox" placeholder="Search"></input>
                <button className="add-btn"><i class="fa-solid fa-plus"></i> Add note</button>
            </div>
        </header>
    );
  }
  
  export default Header;

//   aria-description="search results will appear below"