import {useState} from 'react';
import { nanoid } from 'nanoid';

import Header from '../Header/Header';
import NotesField from '../NotesField/NotesField';

import './App.css';

function id() {
	return nanoid();
}

const initData = [
    {id: id(), title: 'Title', content: ''},
    {id: id(), title: 'Cake Recipe', content: 'Note 1...'},
    {id: id(), title: 'Lecture notes', content: 'Note 2...'},
    {id: id(), title: 'Some ideas', content: 'Note 3...'},
    {id: id(), title: 'Birthdays', content: 'Note 4...'},
    {id: id(), title: 'This week expences', content: 'Note 5...'}
];


function App() {

const [notes, setNotes] = useState(initData);

  return ( 
    <div className="container">
            <Header />
            <NotesField notes={notes}/>
    </div>
  );
}

export default App;
