import styled from 'styled-components';

import NoteItem from '../NoteItem/NoteItem';
import TextArea from '../TextArea/TextArea';


const Field = styled.main`
    position: relative;
    padding-bottom: 50px;
    display: grid;
    grid-template-columns: 200px auto;
    gap: 30px;
    align-items: start;
    nav {
        display: grid;
        grid-template-columns: auto;
        grid-auto-rows: auto;
        gap: 20px;
    }
`;



function NotesField({notes, toggleActive, showNote, editMode, switchToEdit, editNote, addNote, removeNote}) {
    
    const elems =  notes.map(note => {
        return  <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    active={note.active}
                    toggleActive={toggleActive}
                    switchToEdit={switchToEdit}
                    removeNote={removeNote}
            /> 
    });

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
                editMode={editMode}
                removeNote={removeNote}
                switchToEdit={switchToEdit}
            />
        
        </Field>
    );
  }
            
  export default NotesField;