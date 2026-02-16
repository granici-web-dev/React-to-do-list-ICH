import { useContext } from 'react';
import TodoContext from '../../context/todoContext';
import TodoItem from '../todoItem';

function TodoList() {
  const { notes } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {notes.map((note) => {
          return <TodoItem key={note.id} {...note} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
