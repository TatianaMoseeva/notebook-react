function NotesField() {
    return ( 
        <main class="notes-field">
            <nav class="nav-buttons">
                <button class="nav-btn active">Title</button>
                <button class="nav-btn">Cake Recipe</button>
                <button class="nav-btn">Lecture notes</button>
                <button class="nav-btn">Some ideas</button>
                <button class="nav-btn">Birthdays</button>
                <button class="nav-btn">My expences</button>
            </nav>
            <textarea class="textarea" placeholder="Note"></textarea>

            {/* <i class="fa-regular fa-copy"></i>
            <i class="fa-regular fa-trash-can"></i> */}


        </main>
    );
  }
  
  export default NotesField;