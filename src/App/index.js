import React from "react";
import './App.css';
import { AppUI } from "./AppUI";

/* const defaultTodos = [ 
  { text: 'Cortar cebolla', completed:true },
  { text: 'Completar Curso de Introducción a React',  completed:false },
  { text: 'Llorar con la llorona', completed:true }, 
  { text: 'LALALALLA', completed:false } 
] */

function useLocalStorage(itemName, initialValue) {

  const [error, setError] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {

    setTimeout(() => {

      try {

        const localStrorageItem = localStorage.getItem(itemName);

        let parseItem;

        if(!localStrorageItem){

          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parseItem = initialValue

        }else{

          parseItem = JSON.parse(localStrorageItem);

        }

        setItem(parseItem)
        setLoading(false)

      }catch(error){

        setError(error)

      }  


    }, 1000);

  });

  const saveItem = (newItem) => {

    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))

      setItem(newItem)
    }catch(error){

      setError(error)

    }

  }
  
  return {
    item,
    saveItem,
    loading,
    error
  }

}

function App() {

  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

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

  const completeTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed


    saveTodos(newTodos);

  }

  const deleteTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);

  }

  return (

    <AppUI 
      loading = {loading}
      error = {error}
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}

      searchValue={searchValue}
      setSearchValue={setSearchValue}

      searchedTodos={searchedTodos}

      onComplete = {completeTodo}
      onDelete = {deleteTodo}

    />
    
  );

}

export default App;
