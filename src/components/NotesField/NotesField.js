import styled from 'styled-components';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


import NoteItem from '../NoteItem/NoteItem';
import TextArea from '../TextArea/TextArea';
import AddNew from '../AddNew/AddNew';

const Field = styled.main`
    position: relative;
    padding-bottom: 50px;
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

const Circle = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 100%;
    color: #b5b5b5;
`;

function NotesField({notes, toggleActive, showNote, editNote, addNote}) {
    
    const [editMode, setEditMode] = useState(false);

    function switchToEdit(mode) {
        setEditMode(mode)
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
                <AddNew switchToEdit={switchToEdit} />
                {elems}
            </nav>
                
            <TextArea 
                notes={notes} 
                showNote={showNote} 
                editNote={editNote} 
                addNote={addNote} 
                editMode={editMode}

            />
        <Circle><FontAwesomeIcon icon={faTrash} /></Circle>
         
        </Field>
    );
  }
            // <i className="fa-regular fa-copy"></i>
            
  export default NotesField;