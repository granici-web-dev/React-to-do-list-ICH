import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import TodoProvider from './components/todoProvider';

function App() {
  return <>
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  </>;
}

export default App;
