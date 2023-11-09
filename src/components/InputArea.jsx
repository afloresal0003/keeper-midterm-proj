import React from "react";

function InputArea() {
  const [newNote, setNewNote] = useState({
    noteKey: 0,
    noteTitle: "",
    noteContent: ""
  });

  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { value, name } = event.target;
    setNewNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setNewNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleAdd(event) {
    const updatedNotes = [...notes];
    const currLen = updatedNotes.length;
    var someNote = {};
    if (currLen === 0) {
      someNote["key"] = 1;
    } else {
      someNote["key"] = updatedNotes[currLen - 1].key + 1;
    }
    someNote["title"] = newNote.noteTitle;
    someNote["content"] = newNote.noteContent;
    updatedNotes.push(someNote);
    setNotes(updatedNotes);
    event.preventDefault();
  }

  return (
    <div className="note">
      <form className="inputNote">
        <input
          type="text"
          name="noteTitle"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="noteContent"
          placeholder="Take a note..."
          onChange={handleChange}
        />
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Note;
