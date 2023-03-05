import React from "react";
import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [

  {
    text: 'Cortar cebolla', 
    completed:false
  },

  {
    text: 'Completar Curso de Introducción a React', 
    completed:false
  },

  {
    text: 'Llorar con la llorona', 
    completed:false
  }

]

function App(props) {

  const [searchValue, setSearchValue] = React.useState('');

  return (

    <React.Fragment>

      <TodoCounter/>

      <TodoSearch
      
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      
      />

      <TodoList>
        
        {defaultTodos.map(todo => (

          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>

        ))}

      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
    

  );

}

export default App;
