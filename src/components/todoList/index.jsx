import { useContext } from "react";
import TodoContext from "../../context/todoContext";
import NoteItem from '../todoItem';

function TodoList() {
  const {notes} = useContext(TodoContext)

  return (
    <div>
      <ul>
        {notes.map((note) => {
          return <NoteItem key={note.id} {...note}/>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
