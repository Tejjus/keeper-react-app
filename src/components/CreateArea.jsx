import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

function CreateArea(props) {
    const [note, setNote] = useState({
        key: uuidv4(),
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        event.preventDefault();
        props.add(note);
        setNote({
            key: uuidv4(),
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form>
            <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
            <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
