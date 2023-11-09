import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
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

  const handleDelete = (delKey) => {
    const updatedNotes = [...notes];
    const res = updatedNotes.filter((note) => note.key != delKey);
    setNotes(res);
  };

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

  function RenderNotes() {
    var notesList = notes.map((ent) => {
      return (
        <Note
          key={ent.key}
          noteKey={ent.key}
          title={ent.title}
          content={ent.content}
          handleDelete={handleDelete}
        />
      );
    });

    return <div>{notesList}</div>;
  }

  return (
    <div>
      <Header />
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
      <div>
        <RenderNotes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
