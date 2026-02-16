import { useContext, useState } from 'react';
import TodoContext from '../../context/todoContext';

function TodoForm({ setNotes }) {
  const {} = useContext(TodoContext)

  function handleSubmit(event) {
    event.preventDefault();

    const newNote = {
      id: Math.random(),
      title: noteTitle,
      completed: false,
    };

    setNotes((prev) => [...prev, newNote]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} />
      <button type="submit">Add note</button>
    </form>
  );
}

export default TodoForm;
