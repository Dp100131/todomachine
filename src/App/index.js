import React from "react";
import './App.css';
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext"; 

/* const defaultTodos = [ 
  { text: 'Cortar cebolla', completed:true },
  { text: 'Completar Curso de Introducción a React',  completed:false },
  { text: 'Llorar con la llorona', completed:true }, 
  { text: 'LALALALLA', completed:false } 
] */

function App() {

  return (

    <TodoProvider>

      <AppUI />
    
    </TodoProvider>
    
  );

}

export default App;
