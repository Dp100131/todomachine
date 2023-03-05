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
    completed:true
  },

  {
    text: 'Completar Curso de Introducción a React', 
    completed:false
  },

  {
    text: 'Llorar con la llorona', 
    completed:true
  },

  {
    text: 'LALALALLA', 
    completed:false
  }

]

function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){

    searchedTodos = todos

  }else{

    searchedTodos = todos.filter(todo => {

      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLowerCase();

      return todoText.includes(searchText);

    })

    

  }

  return (

    <React.Fragment>

      <TodoCounter

        totalTodos = {totalTodos}
        completedTodos = {completedTodos}

      />

      <TodoSearch
      
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      
      />

      <TodoList>
        
        {searchedTodos.map(todo => (

          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>

        ))}

      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
    

  );

}

export default App;
