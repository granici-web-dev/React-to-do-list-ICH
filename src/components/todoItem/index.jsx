import { useContext } from 'react';
import TodoContext from '../../context/todoContext';

function TodoItem({ title, id }) {
  const { isCompleted, setNotes, toggleCompleteOfItem, deleteItem } = useContext(TodoContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleCompleteOfItem(id, setNotes)}
      />
      <span>{title}</span>
      <button onClick={() => deleteItem(id, setNotes)}>delete</button>
    </li>
  );
}

export default TodoItem;
