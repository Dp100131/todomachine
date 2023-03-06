import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);

      const [openModal, setOpenModal] = React.useState(false);
    
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
    
      const onComplete = (text) => {
    
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos]
    
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    
    
        saveTodos(newTodos);
    
      }
    
      const onDelete = (text) => {
    
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos]
    
        newTodos.splice(todoIndex, 1);
    
        saveTodos(newTodos);
    
      }

      const addTodo = (text) => {
    
        const newTodos = [...todos]
    
        newTodos.push({

          text: text,
          completed: false

        })
    
    
        saveTodos(newTodos);
    
      }

    return(

        <TodoContext.Provider value={{

            loading,
            error,
            totalTodos,
            completedTodos,

            searchValue,
            setSearchValue,

            searchedTodos,

            onComplete,
            onDelete,

            openModal,
            setOpenModal,

            addTodo

        }}>

            {props.children}

        </TodoContext.Provider>

    )
    
}

export { TodoContext, TodoProvider };