import styled from 'styled-components';
import {useState} from 'react';

import NoteItem from '../NoteItem/NoteItem';
import TextArea from '../TextArea/TextArea';

const Field = styled.main`
    display: grid;
    grid-template-columns: 200px auto;
    gap: 30px;
    nav {
        display: grid;
        grid-template-columns: auto;
        grid-auto-rows: auto;
        gap: 20px;
    }
`;

function NotesField({notes, toggleActive, showNote, editNote, addNote}) {
    
    const [addNewMode, setAddNewMode] = useState(false);

    function switchToEdit() {
        setAddNewMode(true)
    }

    const elems =  notes.map(note => {
        return  <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    active={note.active}
                    toggleActive={toggleActive}
                    switchToEdit={switchToEdit}
            /> 
    })

    return ( 
        <Field>
            <nav>
                {elems}
            </nav>
                
            <TextArea 
                notes={notes} 
                showNote={showNote} 
                editNote={editNote} 
                addNote={addNote} 
                addNewMode={addNewMode}
            />

        </Field>
    );
  }
            /* <i className="fa-regular fa-copy"></i>
            <i className="fa-regular fa-trash-can"></i> */
  export default NotesField;