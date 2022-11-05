import React, {useEffect}  from "react";
import ToDoList from "./components/ToDoList";
import Context from "./components/context";
import AddToDo from "./components/AddToDo";
import Loader from "./components/Loader";


function App() {
  const [todos, setTodos] = React.useState([]) 
  const [loading, setLoading] = React.useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(()=> {
        setTodos(todos)
        setLoading(false)
      }, 2000)
    })
  }, [])

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

  function addTodo(title){
    setTodos(
      todos.concat([{
        title,
        id: Date.now(),
        completed: false,
      }])
    )
  }
  
  return (
    <Context.Provider value={{removeTodo}}>
      <div>
        <h1>Список дел</h1>  
        <AddToDo onCreate={addTodo}/>
        {loading && <Loader/>}        
        {todos.length ? <ToDoList todos={todos} onToggle={toggleTodo}/> : 
        loading ? null : <p>No todos</p>}                
      </div>
    </Context.Provider>

  );
}

export default App;
