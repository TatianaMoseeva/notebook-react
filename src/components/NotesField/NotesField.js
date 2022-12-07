function NotesField() {
    return ( 
        <main className="notes-field">
            <nav className="nav-buttons">
                <button className="nav-btn active">Title</button>
                <button className="nav-btn">Cake Recipe</button>
                <button className="nav-btn">Lecture notes</button>
                <button className="nav-btn">Some ideas</button>
                <button className="nav-btn">Birthdays</button>
                <button className="nav-btn">My expences</button>
            </nav>
            <textarea className="textarea" placeholder="Note"></textarea>

            {/* <i className="fa-regular fa-copy"></i>
            <i className="fa-regular fa-trash-can"></i> */}


        </main>
    );
  }
  
  export default NotesField;