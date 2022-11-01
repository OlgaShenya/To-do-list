import React  from "react";
import ToDoList from "./components/ToDoList";
import Context from "./components/context";


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

  function removeTodo(id){
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }
  return (
    <Context.Provider value={{removeTodo}}>
      <div>
        <h1>Список дел</h1>   
          {todos.length ? <ToDoList todos={todos} onToggle={toggleTodo}/> : <p>No todos</p>}                
      </div>
    </Context.Provider>

  );
}

export default App;
