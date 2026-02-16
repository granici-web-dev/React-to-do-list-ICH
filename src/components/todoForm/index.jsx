import { useContext } from 'react';
import TodoContext from '../../context/todoContext';

function TodoForm() {
  const { setNotes, addNote, setAddNote } = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();

    const newNote = {
      id: Math.random(),
      title: addNote,
      isCompleted: false,
    };

    setNotes((prev) => [...prev, newNote]);
    setAddNote('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={addNote} onChange={(event) => setAddNote(event.target.value)} />
      <button type="submit">Add note</button>
    </form>
  );
}


export default TodoForm;
