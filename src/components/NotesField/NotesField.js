import styled from 'styled-components';

const Field = styled.main`
    display: grid;
    grid-template-columns: 200px auto;
    gap: 30px;
    nav {
        display: grid;
        grid-template-columns: auto;
        grid-auto-rows: auto;
        gap: 20px;
        button {
            width: 100%;
            height: 40px;
            background-color: #6364A5;
            box-shadow: 0px 6px 16px #D7D7D7;
            border: none;
            border-radius: 4px;

            color: #fff;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            transition: all .3s;
            :hover {
                background-color: #565794;
            }
            &.active {
                background-color: #D67D70;
                :hover {
                    background-color: #c27165;
                }
            }
        }
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

function NotesField() {
    return ( 
        <Field>
            <nav>
                <button className="active">Title</button>
                <button>Cake Recipe</button>
                <button>Lecture notes</button>
                <button>Some ideas</button>
                <button>Birthdays</button>
                <button>My expences</button>
            </nav>
            <textarea placeholder="Note"></textarea>

        </Field>
    );
  }
            /* <i className="fa-regular fa-copy"></i>
            <i className="fa-regular fa-trash-can"></i> */
  export default NotesField;