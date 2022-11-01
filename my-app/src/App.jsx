import React  from "react";
import ToDoList from "./components/ToDoList";


function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'buy bread'},
    {id: 2, completed: false, title: 'buy milk'},
    {id: 3, completed: false, title: 'buy butter'},
  ]) 

  function toggleTodo(id) {
    setTodos (
      todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  return (
    <div>
      <h1>Список дел</h1>
      <ToDoList todos={todos} onToggle={toggleTodo}/>
    </div>

  );
}

export default App;
