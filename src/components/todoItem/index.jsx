import { useContext } from 'react';
import TodoContext from '../../context/todoContext';

function TodoItem({ title, id, isCompleted }) {
  const { toggleCompleteOfItem, deleteItem } = useContext(TodoContext);

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={() => toggleCompleteOfItem(id)} />
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</span>
      <button onClick={() => deleteItem(id)}>delete</button>
    </li>
  );
}


export default TodoItem;
