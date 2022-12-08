import styled from 'styled-components';

import NoteItem from '../NoteItem/NoteItem';

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
    textarea {
        padding: 20px;
        resize: none;
        background: #F2F2F2;
        border: 1px solid #D7D7D7;
        border-radius: 4px;

        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
`;

function NotesField({notes}) {

    const elems =  notes.map(note => {
        return <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
        />
        
})

    return ( 
        <Field>
            <nav>
                {elems}
            </nav>
            <textarea placeholder="Note"></textarea>

        </Field>
    );
  }
            /* <i className="fa-regular fa-copy"></i>
            <i className="fa-regular fa-trash-can"></i> */
  export default NotesField;