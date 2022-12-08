import {useState} from 'react';
import { nanoid } from 'nanoid';

import Header from '../Header/Header';
import NotesField from '../NotesField/NotesField';

import './App.css';

function id() {
	return nanoid();
}

const initData = [
    {id: id(), title: 'Title', content: '', active: true},
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
           note.active = !note.active;
        }
        return note;
    }));
}


  return ( 
    <div className="container">
            <Header />
            <NotesField notes={notes} toggleActive={toggleActive}/>
    </div>
  );
}

export default App;
