import {useState} from 'react';
import { nanoid } from 'nanoid';

import Header from '../Header/Header';
import NotesField from '../NotesField/NotesField';

import './App.css';

function id() {
	return nanoid();
}

const initData = [
    {id: id(), title: 'Note example 1', content: 'Note 1...', active: false},
    {id: id(), title: 'Note example 2', content: 'Note 2...', active: false},
    {id: id(), title: 'Note example 3', content: 'Note 3...', active: false},
    {id: id(), title: 'Note example 4', content: 'Note 4...', active: false},
    {id: id(), title: 'Note example 5', content: 'Note 5...', active: false}
];


function App() {

    const [notes, setNotes] = useState(initData);
    const [query, setQuery] = useState('');
    const [editMode, setEditMode] = useState(false);
    const visibleData = searchNote(notes, query);

    function switchToEdit(mode) {
        setEditMode(mode)
    }

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

    function removeActive() {
        setNotes(notes.map(note => {
            if (note.active === true) {
                note.active = false;
            } return note;
        }))
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

    function removeNote() {
        setNotes(notes.filter(note => note.active !== true));
    }

    function searchNote (items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.title.indexOf(term) > -1;
        })
    }

    function handleSearch (e) {
        setQuery(e.target.value);
    }

    return ( 
        <div className="container">
                <Header query={query} handleSearch={handleSearch} removeActive={removeActive} switchToEdit={switchToEdit}/>
                <NotesField notes={visibleData} toggleActive={toggleActive} showNote={showNote} editMode={editMode} switchToEdit={switchToEdit} editNote={editNote} addNote={addNote} removeNote={removeNote} />
        </div>
    );
}

export default App;

