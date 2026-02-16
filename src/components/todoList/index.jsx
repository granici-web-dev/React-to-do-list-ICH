import { useContext } from "react";
import TodoContext from "../../context/todoContext";

function TodoList() {
  const {notes, setNotes} = useContext(TodoContext)

  return (
    <div>
      <ul>
        {notes.map((note) => {
          return <NoteItem key={note.id} {...note} setNotes={setNotes} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
