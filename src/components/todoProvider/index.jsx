import { useState } from 'react';
import TodoContext from '../../context/todoContext';

function TodoProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState('');

  const deleteItem = (id) => {
    setNotes((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCompleteOfItem = (id) => {
    setNotes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item)),
    );
  };

  return (
    <TodoContext.Provider
      value={{
        notes,
        setNotes,
        addNote,
        setAddNote,
        deleteItem,
        toggleCompleteOfItem,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
