import { useState } from "react";
import TodoContext from "../../context/todoContext";

function TodoProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const deleteItem = (id, setState) => {
    setState((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCompleteOfItem = (id, setState) => {
    setState((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item)),
    );
  };


  return (
    <TodoContext.Provider
      value={{ notes, setNotes, addNote, setAddNote, isCompleted, setIsCompleted }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
