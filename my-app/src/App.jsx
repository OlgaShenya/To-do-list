import React  from "react";
import ToDoList from "./components/ToDoList";


function App() {
  const todos = [
    {id: 1, completed: false, title: 'buy bread'},
    {id: 2, completed: false, title: 'buy milk'},
    {id: 3, completed: false, title: 'buy butter'},
  ] 

  return (
    <div>
      <h1>Список дел</h1>
      <ToDoList todos={todos}/>
    </div>

  );
}

export default App;
