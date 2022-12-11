import {useState} from 'react';
import { nanoid } from 'nanoid';

import Header from '../Header/Header';
import NotesField from '../NotesField/NotesField';

import './App.css';

function id() {
	return nanoid();
}

const initData = [
    {id: id(), title: 'Cake Recipe', content: 'Note 1...', active: false},
    {id: id(), title: 'Lecture notes', content: 'Note 2...', active: false},
    {id: id(), title: 'Some ideas', content: 'Note 3...', active: false},
    {id: id(), title: 'Birthdays', content: 'Note 4...', active: false},
    {id: id(), title: 'This week expences', content: 'Note 5...', active: false}
];


function App() {

    const [notes, setNotes] = useState(initData);

    function toggleActive(id) {
        setNotes(notes.map(note => {
            if (note.id === id) {
                note.active = true;
            } else {
                note.active = false;
            }
            return note;
        }));
    }

    function showNote() {
        let text;
        notes.forEach(note => {
            if (note.active === true) {
                text = note.content;
            } 
        })
        return text;
    }

    function editNote(event) {
		setNotes(notes.map(note => {
			if (note.active === true) {
				note.content = event.target.value;
			}
			
			return note;
		}));
	}

    function addNote(title, content) {
        let newNote = {
            id: id(),  
            title: title,
            content: content
        };
        if (newNote.content.length > 0 ) {
            setNotes([...notes, newNote]);
        }
    }

    return ( 
        <div className="container">
                <Header />
                <NotesField notes={notes} toggleActive={toggleActive} showNote={showNote} editNote={editNote} addNote={addNote}/>
        </div>
    );
}

export default App;

